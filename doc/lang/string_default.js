(function() {

    var string_table = {

        "index.userMenu.about": "About",
        "index.userMenu.signin": "Sign in",
        "index.userMenu.signup": "Sign up",
        "index.userMenu.login": "Login",
        "index.userMenu.logout": "Logout",
        "index.copyright": "Copyright © 2018,  D4Labs, Inc",
        "index.privacy": "Privay Policy",
        "index.terms": "Terms",

        "index.languageSet.kr": "한국어",
        "index.languageSet.eng": "English",
        "index.languageSet.ch": "中文(简体)",
        "index.languageSet.jp": "日本語",
        "index.languageSet.ind": "Indonesian",
        "index.languageSet.vt": "Vietnamese",
        "index.languageSet.th": "Thai",
        "index.languageSet.fr": "French",
        "index.languageSet.sp": "Spanish",
        "index.languageSet.pt": "Portuguese",
        "index.languageSet.ru": "Russian",

    } //string_table


    // Node.js
    if (typeof module === 'object' && module.exports) {
        module.exports = string_table;
    }
    // AMD / RequireJS
    else if (typeof define === 'function' && define.amd) {
        define([], function() {
            return string_table;
        });
    }
    // included directly via <script> tag
    else {
        root.ships_string_default = string_table;
    }
}());