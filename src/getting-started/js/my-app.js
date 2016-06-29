angular.module('my-app',["ngRoute"])
    .config (function ($routeProvider) {
        console.log('configuring routes');
        $routeProvider
            .when('/main', {
                templateUrl: "/js/partials/main.html",
                controller: "MyController"
            })
            .when('/user/:username', {
                templateUrl: "/js/partials/user.html",
                controller: 'UserController'
            })
            .otherwise({
                redirectTo: "/main"
            });
    });