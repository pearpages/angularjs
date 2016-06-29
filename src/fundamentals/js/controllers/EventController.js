'use strict';
(function (){
    angular.module('app')
        .controller('EventController',[EventController]);

        function EventController() {
            var vm = this;

            vm.vote = function(value,session) {
                session.upVoteCount += value;
            }

            vm.event = {
                name: 'name',
                date: '2016/01/01',
                time: '10:30 am',
                location: {
                    address: '',
                    city: '',
                    province: ''
                },
                imageUrl: '',
                sessions: [
                    {
                        name: 'Directives Masterclass',
                        upVoteCount: 0
                    },{
                        name: 'Scopes for fun and profit',
                        upVoteCount: 0
                    },{
                        name: 'Well Behaved Controllers',
                        upVoteCount: 0
                    }
                ]
            };
        }
})();