export default function NavbarController($scope, $rootScope, authService) {
    let vm = this;
    vm.logout = function () {
        authService.logout();
    };

    vm.isLoggedIn = function () {
        return authService.isLoggedIn();
    };

    vm.getCurrentUsername = function() {
        return authService.getCurrentUserName();
    }

    $scope.turnOffCamera = function() {
        $rootScope.localstream.getTracks()[0].stop();
        $rootScope.localstream = undefined;
        $rootScope.cameraTurnedOn = false;
    }
}


