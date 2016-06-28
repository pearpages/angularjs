angular.module('my-app')
    .controller('MyController',['$http',myController]);

function myController($http) {
    var vm = this;

    var person = {
        firstName: 'Pere',
        lastName: 'Pages',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Zayapa_%28Grapsus_grapsus%29%2C_Las_Bachas%2C_isla_Baltra%2C_islas_Gal%C3%A1pagos%2C_Ecuador%2C_2015-07-23%2C_DD_30.JPG/800px-Zayapa_%28Grapsus_grapsus%29%2C_Las_Bachas%2C_isla_Baltra%2C_islas_Gal%C3%A1pagos%2C_Ecuador%2C_2015-07-23%2C_DD_30.JPG'
    }

    vm.title = 'Hello World';
    vm.person = person;
    vm.person2;
    vm.user;

    vm.getData = function () {
        $http.get('/mockup-data/data.json').then(function(response){
            vm.person2 = response.data;
        });
    };

    vm.getGithubUser = function(user) {
        $http.get("https://api.github.com/users/pearpages")
            .then(function(response) {
                vm.user = response.data;
            });
    }
    
}