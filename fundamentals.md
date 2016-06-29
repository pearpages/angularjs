# Fundamentals

## Controllers and Markup

### Directives

- ngClick
- ngDblClick
- ngMousdown
- ngMouseenter
- ...
- ngForm -> allows to nest form
- ngSubmit
- ngHref
- ngSrc -> delays fetching an image until after binding has occurred

### Filters

{{expression | filter}}

- uppercase
- lowercase
- json
- currency

```javascript
module.filter('name', function() {
    return function(input /*, filter parameters */) {
        // modify input
        return modifiedOutput;
    }
});
```

### Two Day Binding

- input
- select
- textarea

### Validation

- required
- ngPattern
- from Properties
- CSS classes: pristine, ng-dirty, ng-valid, ng-valid-required

```html
<!-- A form must have a name to check validity with angular -->
<form name="myForm">
    <!-- html -->
    <button ng-disabled="myForm.$invalid"></button>
</form>
```

---

## Services

Allow us to reuse code, use single responsibility principle, dependency injection and make everything more testable.

### Built-in

$http, $resource, $anchorScroll, $cacheFactory, $compile, $parse, $locale, $timeout, $exceptionHandler, $filter, $cookieStore, $interpolate, $log, $rootScope, $window, $document, $rootElement, $route, $routeParams, $location, $httpBackend, $controller, ...

---

## Routing

```javascript
$routeProvider.when('/event/:eventId', {
    foo: 'bar',
    templateUrl: '/templates/EventDetails.html',
    controller: 'EventController',
    resolve:  {
        event: function($route, eventData) {
            return eventData.getEvent($route.current.pathParams.eventId).$promise;
        }
    }
});
```

### $location

```javascript
$location.url('/newEvent');
```

absUrl, protocol, port, host, path, search, hash, url.

---

## Custom Directives

---

## Testing Angular

---