/**
 * Created by wojciech_dymek on 19.04.17.
 */
export default function RegistrationController($scope, $location, UserService) {
    let registration = this;
    registration.register = register;

    function register() {
        registration.dataLoading = true;
        UserService.Create(registration.user)
            .then(function (response) {
                console.log(response)
                if (response.success!==undefined && !response.success) {
                    registration.dataLoading = false;
                    registration.errorMessage = response.message
                } else {
                    $location.path('/login');
                }
            });
    }

    $scope.checkPassword = function() {
        $scope.form.passwordRepeated.$error.dontMatch = registration.user.password !== registration.password2;
    }

    $scope.checkEmail = function() {
        //TODO
    }
}