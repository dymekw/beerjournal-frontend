routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('collections', {
            url: '/collections',
            template: require('./collections.html'),
            controller: 'CollectionsController',
            controllerAs: 'collections'
        });
}