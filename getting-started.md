# Getting Started

1. we need to add angularjs file
2. use the **ng-app** attribute in the html (it will bootstrap the app)

## Introduction

### Using Functions

Functions help us to create abstractions, build modules and avoid global variables. 

### Modules

```javascript
// revealing module pattern
var createWorker = function() {

    var task1 = function () {
        console.log('task1');
    };

    var task2 = function () {
        console.log('task2');
    }

    return {
        task1: task1,
        task2: task2
    }
};
```

### IIFE 

```javascript
(function() {
    // code
})();
```
--- 

## Controllers

```html
<div ng-controller="MyController as my">
    {{my.title}}

    <dl>
        <dt>FirstName</dt>
        <dd>{{my.person.firstName}}</dd>
        <dt>LastName</dt>
        <dd>{{my.person.lastName}}</dd>
        <dt>Image</dt>
        <!-- pay attention to ng-src directive for loading images -->
        <dd><img ng-src="{{my.person.image}}" alt="Cool image"></dd>
    </dl>
</div>
```

```javascript
angular.module('my-app')
    .controller('MyController',[myController]);

function myController() {
    var vm = this;

    var person = {
        firstName: 'Pere',
        lastName: 'Pages',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Zayapa_%28Grapsus_grapsu.JPG'
    }

    this.title = 'Hello World';
    this.person = person;
    
}
```

### $http Service

Encapsulates HTTP communication (GET, POST, PUT, DELETE). $http is part of the angularjs core.

$http returns a **promise**.

Using GitHub API as an example

1. Available from JavaScript in a browser
2. Returns JSON
3. No authentication or client key required 

```javascript
vm.getGithubUser = function() {
    if(vm.user !== undefined) {
        var success = function () {
            vm.user = response.data;
        };

        var error = function () {
            // code
        }

        $http.get("https://api.github.com/users/"+vm.user)
        .then(success,error);
    }else{
        alert('select one user please!');
    }
}
```

### Modules

```javascript
(function () {
    var app = angular.module('my-app',[]);
})();
```

---

## Directives and Views

```javascript
// ng-model
<input type="text" ng-model="vm.username" />
```

```javascript
// ng-click
<button ng-click="search(vm.username)">Click</button>
```

```javascript
// ng-submit
<form name="searchUser" ng-submit="search(username)">
    <input type="search" required placeholder="Username to find" ng-model="username" />
    <input type="submit" value="search" />
</form>
```

```javascript
// ng-repeat
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Stars</th>
            <th>Language</th>
        </tr>
    </thead>
    <tbody>
        <tr ng-repeat="repo in vm.repos | orderBy: 'stargazers_count' : reverse = true">
            <td>{{repo.name}}</td>
            <td>{{repo.stargazers_count | number }}</td>
            <td>{{repo.language}}</td>
        </tr>
    </tbody>
</table>
```

```javascript
// filters
// expression | filterName: parameter
// currency, date, filter, josn, limitTo, lowercase, uppercase, number, orderBy
```

```html
<!-- ng-show, ng-hide -->
<div ng-show="vm.user !== undefined && vm.user.avatar_url !== undefined">
    <!-- more html -->
</div>
```

```html
<!-- ng-include -->
<ng-include src="'/js/partials/repos.html'"></ng-include>
```
 
---

## Services

They are very useful among other things for:

- create reusable logic
- create shared data
- manage complexity

```javascript
// $timeout, $interval
function startCountdown() {
    // stop after 5 intervals;
    // another good thing about $interval is that calls the $digest cycle
    globalVar = $interval(decrementCountdown, 1000, vm.countdown);
}

// somewhre else in the code
$interval.cancel(globalVar);
```

```javascript
// $log methods
// log, info, error, warn, debug
vm.getGithubUser = function (user) {
    $log.info("Searching for "+ user);
    if (user !== undefined) {

        $http.get("https://api.github.com/users/" + user)
            .then(onUserComplete, onError);
    } else {
        alert('select one user please!');
    }
}
```

```javascript
// $location, $anchorScroll
var onRepos = function (response) {
    vm.repos = response.data;
    $location.hash('userDetails'); // look for the html #id
    $anchorScroll(); // scroll to there
};
```

```javascript
(function() {
    angular.module('my-app')
        .factory('github', ['$http',github]);

    function github($http) {

        var getUser = function(username) {
            // returning a promise
            return $http.get("https://api.github.com/users/" + user)
                .then(function(response) {
                    return response.data;
                });
        }

        var getRepos = function(user) {
            $http.get(user.repos_url)
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
```

---

## Routing

Manage different views in the application.

- angular-route.js ```npm install --save angular-route```
  - ["ngRoute"]
- configure **$routeProvider**
- setup a layout view with **ng-view**

```javascript
$routeProvider
    .when('/main', {
        templateUrl: 'main.html',
        controller: 'MainController'
    });
```

```javascript
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
```

```javascript
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
```

---