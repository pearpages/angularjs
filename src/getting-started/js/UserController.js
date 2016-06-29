(function() {

    angular.module('my-app')
        .controller('UserController', ['$routeParams',UserController]);

        function UserController($routeParams) {

            var vm = this;

            this.message = "User page loaded for id " + $routeParams.username;
        }
})();