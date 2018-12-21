(function() {
    g_G.util = {};

    //  https://github.com/CodeSeven/toastr
    g_G.toastr = toastr;
    /*
    // Display a warning toast, with no title
    toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')

    // Display a success toast, with a title
    toastr.success('Have fun storming the castle!', 'Miracle Max Says')

    // Display an error toast, with a title
    toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')

    // Override global options
    toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', {timeOut: 5000})
    */


    g_G.checkString = function(val, key, max, min = 0) {
        var v = val[key];
        if (v == null) {
            g_G.error('checkString() : ' + key + '==null');
            return true;
        }
        if (v.length <= min) {
            g_G.error('checkString() : ' + key + 'length <=min ' + min);
            return true;
        }
        if (max) {
            if (v.length > max) {
                g_G.error('checkString() : ' + key + 'length >max ' + max);
                return true;
            }
        }
        return false;
    }


    g_G.checkOk = function(bool, log) {
        if (bool == false) {
            g_G.error(log);
            return true;
        }
        return false;
    }


    function _ajax_error(jqXHR, exception) {
        if (jqXHR.status === 0) {
            $('#status').css('color', 'red').html(' Not connect. Verify Network.');
        } else if (jqXHR.status == 404) {
            $('#status').css('color', 'red').html(' Requested page not found. [404]');
        } else if (jqXHR.status == 500) {
            $('#status').css('color', 'red').html(' Internal Server Error [500].');
        } else if (exception === 'parsererror') {
            $('#status').css('color', 'red').html(' Requested JSON parse failed.');
        } else if (exception === 'timeout') {
            $('#status').css('color', 'red').html(' Time out error.');
        } else if (exception === 'abort') {
            $('#status').css('color', 'red').html(' Ajax request aborted.');
        } else {
            $('#status').css('color', 'red').html(' Uncaught Error.' + jqXHR.responseText);
        }
    }

    function getlocale() {
        var userLang = navigator.language || navigator.userLanguage;
        userLang = userLang.split('-')[0];
        //alert("The language is: " + userLang);
        return userLang;
    }

    g_G.error_handler = function(eCmd, rq, rs, err) {
        if (g_G.SERVICE_MODE == 'dev') {
            g_G.toastr.error(err.message, eCmd);
        }
    }

    g_G.http_eCmd = function(method, eCmd, data, CB) {
        g_G.http_call(method, 'http://localhost:10001/api/v3/' + eCmd, data, (err, ret) => {
            if (err) g_G.error_handler(eCmd, data, ret, err);
            if (CB) return CB(err, ret);
        });
    }

    g_G.http_call = function(method, url, data, CB) {
        data.locale = getlocale();
        g_G.clog('http', 'g_G.http_get = ', url);
        //console.dir(data);

        $.ajax({
            url: url,
            type: method,
            data: data,
            dataType: 'json',
            crossDomain: true,

            success: function(ret) {
                if (ret.error) {
                    g_G.error(url, ret.error);
                    if (CB) CB(ret.error);
                    return;
                }
                g_G.clog('http', 'http_get  success= ', ret);
                if (ret.user) {
                    g_G.user = ret.user;
                };
                //$('#status').css('color', 'black').html(' ok : ' + url);
                if (CB) CB(null, ret);
            },
            error: function(xhr, exception) {
                var ret = xhr.responseJSON;
                g_G.error('http_get', url, ret);
                //_ajax_error(xhr, exception);
                if (CB) CB(ret.error ? ret.error : ret, ret);
            }
        });
    }


})();