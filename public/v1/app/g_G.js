var g_G = {
    isLogin: true,
    locale: 'kr',
    pages: {
        'index-main-chat': true,
        'index-user-info': false,
        'window-login': false,
        'window-register': false,
        'window-reset-passwd': false,
    },
    user: null, // eUSER_CREATE, eUSER_LOGIN시 값이 세팅된다.
    component: {

    },

};

g_G.log = function(...args){
    console.log(...arguments);
}
g_G.clog = function(tag,...args){
    console.log('['+tag+']' , ...arguments);
}

g_G.warn = function(...args){
    console.warn(...arguments);
}
g_G.error = function(...args){
    console.error(arguments);
}

g_G.getString = function(str, locale) {
    return str;
}
g_G.isMe = function(uid) {
    if(g_G.user==null) return false;
    return g_G.user._id == uid;
}

g_G.change_skin = function(cls) {
    function store(name, val) {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem(name, val);
        } else {
            window.alert('Please use a modern browser to properly view this template!');
        }
    }

    var my_skins = [
        "skin-blue",
        "skin-black",
        "skin-red",
        "skin-yellow",
        "skin-purple",
        "skin-green",
        "skin-blue-light",
        "skin-black-light",
        "skin-red-light",
        "skin-yellow-light",
        "skin-purple-light",
        "skin-green-light"
    ];
    $.each(my_skins, function(i) {
        $("body").removeClass(my_skins[i]);
    });

    $("body").addClass(cls);
    store('skin', cls);
    return false;
}

