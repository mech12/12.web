// Register `phoneList` component, along with its associated controller and template
angular.
module('App12ships').
component('windowResetPasswd', { // This name is what AngularJS uses to match to the `<phone-list>` element.

    templateUrl: './window/window-reset-passwd.html',

    controller: function() {
        var ctrl = this;
		ctrl.showPage = g_G.Ctrl12ships.showPage;    
    }
});
