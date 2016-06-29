(function() {

    angular.module('my-app')
        .controller('UserController', ['$routeParams','$location',UserController]);

        function UserController($routeParams,$location) {

            var vm = this;

            vm.message = "User page loaded for id " + $routeParams.username;
            vm.gotoMain = function () {
                $location.path('/main');
            }

        }
})();