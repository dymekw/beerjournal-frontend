/**
 * Created by wojciech_dymek on 19.04.17.
 */

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('registration', {
            url: '/registration',
            template: require('./registration.html'),
            controller: 'RegistrationController',
            controllerAs: 'registration'
        });
}
