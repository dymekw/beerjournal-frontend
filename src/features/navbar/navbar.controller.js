export default function NavbarController($rootScope,$scope,$http,authService) {
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

    var getUserAvatar = function () {
        if(vm.isLoggedIn()) {
            $http.get('api/users/'+$rootScope.globals.currentUser.id+'/avatar')
                .then(function (response) {
                    $scope.avatar = 'api/users/'+$rootScope.globals.currentUser.id+'/avatar';
                }, function (error) {
                    $scope.avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxeed1zuKopBf5p58ffZNLCz2DMwbmA_xj9fD2W-EzZ4xcsVN6oFhAAw';
                });
        }
    }

    getUserAvatar();
}


