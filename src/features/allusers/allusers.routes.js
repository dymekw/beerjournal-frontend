routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('allusers', {
            url: '/allUsers',
            template: require('./allusers.html'),
            controller: 'AllUsersController',
            controllerAs: 'allusers'
        });
}
