(function() {
    angular.module('my-app')
        .factory('github', ['$http',github]);

    function github($http) {

        var getUser = function(username) {
            // returning a promise
            return $http.get("https://api.github.com/users/" + username)
                .then(function(response) {
                    return response.data;
                });
        }

        var getRepos = function(user) {
            // returning a promise
            return $http.get(user.repos_url)
                .then(function(response) {
                    return response.data;
                });
        }
        
        return {
            getUser: getUser,
            getRepos: getRepos
        };
    }

})();