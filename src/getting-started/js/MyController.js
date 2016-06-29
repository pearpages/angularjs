(function () {
    angular.module('my-app')
        .controller('MyController', ['$http','$interval','$log', myController]); // the array syntax is for the minifiers

    function myController($http,$interval,$log) {
        var vm = this;

        vm.countdown = 5;
        vm.title = 'Hello World';
        vm.person = person;
        vm.person2;
        vm.user;
        vm.username = '';
        vm.repos;

        // the position of the variables is very important because of hoisting
        // so countdown must go before startCountDown, otherewise won't bee kept
        var countdownInterval = null;
        var init = function() {
            startCountdown();
        };

        init();

        vm.getData = function () {
            $http.get('/mockup-data/data.json').then(function (response) {
                vm.person2 = response.data;
            });
        };

        function startCountdown() {
            // stop after 5 intervals;
            // another good thing about $interval is that calls the $digest cycle
            countdownInterval = $interval(decrementCountdown, 1000, vm.countdown);
        };

        function decrementCountdown() {
            vm.countdown--;
            if( vm.countdown == 0){
                vm.getGithubUser(vm.username);
            }
        }

        var onRepos = function (response) {
            vm.repos = response.data;
        };

        var onUserComplete = function (response) {
            vm.user = response.data;
            $http.get(vm.user.repos_url)
                .then(onRepos, onError);
        };

        var onError = function () {
            // code
        }

        vm.getGithubUser = function (user) {
            $log.info("Searching for "+ user);
            console.log('hello there',countdownInterval);
            if(countdownInterval) {
                
                $interval.cancel(countdownInterval);
            }
            if (user !== undefined) {
                $http.get("https://api.github.com/users/" + user)
                    .then(onUserComplete, onError);
            } else {
                alert('select one user please!');
            }
        }

        var person = {
            firstName: 'Pere',
            lastName: 'Pages',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Zayapa_%28Grapsus_grapsus%29%2C_Las_Bachas%2C_isla_Baltra%2C_islas_Gal%C3%A1pagos%2C_Ecuador%2C_2015-07-23%2C_DD_30.JPG/800px-Zayapa_%28Grapsus_grapsus%29%2C_Las_Bachas%2C_isla_Baltra%2C_islas_Gal%C3%A1pagos%2C_Ecuador%2C_2015-07-23%2C_DD_30.JPG'
        };

    }
}
)();

