/**
 * Created by wojciech_dymek on 19.04.17.
 */
export default function RegistrationController($rootScope, $scope, $http, $location) {
    let registration = this;
    registration.register = register;
    console.log(registration.user);
    function register() {
        $http.post('/api/users', registration.user)
            .then(function(res) {
                    $location.path('/login');
                },
                function(res) {
                    console.log('Unable to create new user');
                    console.log(res);
                });
    }

    $scope.checkPassword = function() {
        $scope.form.passwordRepeated.$error.dontMatch = registration.user.password !== registration.password2;
    }

    $scope.checkEmail = function() {
        //TODO
    }
}