export default function CollectionsController($rootScope, $scope, $http) {
    let user = $rootScope.globals.currentUser;

    $scope.username = user.username;
    $scope.currentNavItem = "collections";

    $scope.userItems = [];
    $scope.userOne = {};

    function userItems () {
        $http.get('/api/users/' + user.id + "/collection/items")
            .then(function (response) {
                $scope.userItems = response.data;
            }, function (error) {
                console.log(error);
            });
    }

    userItems();
}