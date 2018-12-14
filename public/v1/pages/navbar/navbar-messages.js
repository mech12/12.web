
// Register `phoneList` component, along with its associated controller and template
angular.
module('App12ships').
component('navbarMessages', { // This name is what AngularJS uses to match to the `<phone-list>` element.

    templateUrl: 'navbar/navbar-messages.html',

    controller: function() {
        var ctrl = this;
    }
});
