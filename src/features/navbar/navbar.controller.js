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
                    $scope.avatar = 'https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/user.png';
                });
        }
    }

    getUserAvatar();
}


