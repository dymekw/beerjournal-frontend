export default function CollectionsController($rootScope, $scope, $http, $location, $uibModal) {
    let user = undefined;
    $scope.isUserCollection = false;

    if (!$scope.selectedUser) {
        $scope.selectedUser = $rootScope.globals.currentUser;
        $scope.currentNavItem = "collections";
    }
    $scope.isUserCollection = $scope.selectedUser == $rootScope.globals.currentUser;
    user = $scope.selectedUser;

    $scope.username = user.username;
    $scope.userItems = [];

    function userItems () {
        $http.get('/api/users/' + user.id + "/collection/items")
            .then(function (response) {
                $scope.userItems = response.data;
            }, function (error) {
                console.log(error);
            });
    }

    $scope.showDetails = function (itemId) {
        $scope.itemId = itemId;
        var modalInstance = $uibModal.open({
            templateUrl: 'modals/itemDetails.html',
            scope: $scope
        }).result.finally(
            function() {
            }
        ).then(angular.noop, angular.noop);
    }


    $scope.deleteItem = function (itemID) {
        $http.delete('/api/users/' + user.id + '/collection/items/' + itemID).then(function() {
            userItems();
        }, function(res) {
            console.log(res);
            console.log('Unable to remove item: ' + itemID + ' from collection')
        })
    }

    userItems();
}