/**
 * Created by wojciech_dymek on 19.04.17.
 */
export default function RegistrationController($scope, $location) {
    let registration = this;
    registration.register = register;

    function register() {
        registration.dataLoading = true;
        $location.path('/login');
    }

    $scope.checkPassword = function() {
        $scope.form.passwordRepeated.$error.dontMatch = registration.user.password !== registration.user.password2;
    }
}