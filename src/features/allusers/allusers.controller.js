export default function AllUsersController($rootScope, $scope, $http) {
 
    let user = $rootScope.globals.currentUser;

    $scope.username = user.username;
    $scope.currentNavItem = "allUsers";
    $scope.users = [];

    function getUsersFromServer () {
        $http.get('/api/users/')
            .then(function (response) {
                $scope.users = response.data;
            }, function (error) {
                console.log(error);
            });
    }
    getUsersFromServer();
}


