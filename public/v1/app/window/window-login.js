// Register `phoneList` component, along with its associated controller and template
angular.
module('App12ships').
component('windowLogin', { // This name is what AngularJS uses to match to the `<phone-list>` element.

    templateUrl: './window/window-login.html',

    controller: function() {
        var ctrl = this;
        ctrl.g_G = g_G;
    }
});