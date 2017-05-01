routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('ToastService', {
            controller: 'ToastService',
        });
}