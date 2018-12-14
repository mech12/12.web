var g_G = {};
// Define the `App12ships` module
g_G.App12ships = angular.module('phonecatApp', []);

// Define the `Ctlr12ships` controller on the `phonecatApp` module
g_G.App12ships.controller('PhoneListController', function PhoneListController($scope) {
    $scope.phones1 = [{
        name: '1234 Nexus S',
        snippet: 'Fast just got faster with Nexus S.'
    }, {
        name: '1234Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.'
    }, {
        name: '1234 MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.'
    }];
});


