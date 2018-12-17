
// Register `phoneList` component, along with its associated controller and template
angular.
module('App12ships').
component('indexSidebar', { // `<index-sidebar>` element.

    templateUrl: 'index-sidebar.html',
    controller: function () {
        this.phones = [{
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
        }, {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
        }, {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
        }];
    }
});
