(function(){
    angular.module('app')
        .controller('DirectivesController',[DirectivesController]);

        function DirectivesController() {
            var vm = this;

            vm.property = false;
            vm.handleChange = function () {
                alert('changed '+vm.property);
            }
        }
})();