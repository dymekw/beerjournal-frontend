routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('events', {
            url: '/events',
            template: require('./events.html'),
            controller: 'EventsController',
            controllerAs: 'events'
        });
}