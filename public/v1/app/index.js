//g_G.change_skin('skin-blue');
//

// Define the `App12ships` module
g_G.App12ships = angular.module('App12ships', [
    'ngRoute',
]).
config(['$routeProvider',
    function config($routeProvider, $locationProvider) {
        $routeProvider.
        when('/regist', {
            template: '<window-register></window-register>',
        }).
        when('/login', {
            template: '<window-login></window-login>',
        }).
        when('/login', {
            template: '<window-login></window-login>',
        }).
        when('/info', {
            template: '<index-user-info></index-user-info>',
        }).
        when('/chat', {
            template: '<index-main-chat></index-main-chat>',
        }).
        when('/reset_passwd', {
            template: '<window-reset-passwd></window-reset-passwd>',
        }).
        otherwise({
            redirectTo: '/login'
        });
    }
]);

// Define the `Ctlr12ships` controller on the `App12ships` module
g_G.App12ships.controller('Ctrl12ships', function Ctrl12ships($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;

        $scope.g_G = g_G;
        g_G.Ctrl12ships = $scope;
        g_G.path_endpoint = g_G.getString('window-login');

        g_G.routeGoto = function(path){
            g_G.path_endpoint = path;
            $location.path( path );
        }

        g_G.http_eCmd('GET', 'eSERVER_INFO', {}, (err, ret) => {
            if (err) return;
            g_G.SERVICE_MODE = ret.SERVICE_MODE;
            g_G.routeGoto('/chat');
        });


    })
    .controller('RegistController', function($scope, $routeParams) {
        $scope.name = 'RegistController';
        $scope.params = $routeParams;
    })

    .controller('LoginController', function($scope, $routeParams) {
        $scope.name = 'LoginController';
        $scope.params = $routeParams;
    });