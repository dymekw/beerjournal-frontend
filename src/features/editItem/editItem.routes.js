routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('editItem', {
            url: '/edit-item/:id',
            template: require('./editItem.html'),
            controller: 'EditItemController'
        });
}
