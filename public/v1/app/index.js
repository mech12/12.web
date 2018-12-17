var g_G = {
    isLogin:false,
    locale: 'kr',
    pages: {
        'index-main-chat': false,
        'index-user-info': false,
        'window-login': true,
        'window-register': false,
        'window-reset-passwd': false,
    },
    user: {
        _id: 'roy',
    },
    component: {

    },

};


g_G.getString = function(str, locale) {
    return str;
}
g_G.isMe = function(uid) {
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

//g_G.change_skin('skin-blue');
//

// Define the `App12ships` module
g_G.App12ships = angular.module('App12ships', []);

// Define the `Ctlr12ships` controller on the `App12ships` module
g_G.App12ships.controller('Ctrl12ships', function Ctrl12ships($scope) {

    $scope.g_G = g_G;
    g_G.Ctrl12ships = $scope;
    g_G.path_endpoint = g_G.getString('window-login');

    $scope.isShowPage = function(page) {
        return $scope.pageList[page] == true;
    }

    $scope.showPage = function(page) {
        //if(g_G.user.lastLogin==null) return;
        g_G.path_endpoint = page;

        Object.keys(g_G.pages).forEach(k => {
            if (k == page)
                g_G.pages[k] = true;
            else
                g_G.pages[k] = false;
        });
    }

    $scope.showPage('window-login');

});

