export default function CollectionsController($rootScope, $scope, $http, $location, $uibModal) {
    let user = undefined;
    $scope.isUserCollection = false;

    if (!$scope.selectedUser) {
        $scope.selectedUser = $rootScope.globals.currentUser;
        $scope.currentNavItem = "collections";
    }
    $scope.isUserCollection = $scope.selectedUser.id == $rootScope.globals.currentUser.id;
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
        dialogConfirm("Are you sure?", "Delete item").then(function(res) {
        },
        function(res) {
            if (!res) { //delete item when res is undefined
                $http.delete('/api/users/' + user.id + '/collection/items/' + itemID).then(function () {
                    userItems();
                }, function (res) {
                    console.log(res);
                    console.log('Unable to remove item: ' + itemID + ' from collection')
                })
            }
        })
    }


    function dialogConfirm(message, title) {
        var modal = $uibModal.open({
            size: 'sm',
            templateUrl: '/modals/dialogConfirm.html',
            controller: function ($scope, $uibModalInstance) {

                $scope.modal = $uibModalInstance;

                if (angular.isObject(message)) {
                    angular.extend($scope, message);
                } else {
                    $scope.message = message;
                    $scope.title = angular.isUndefined(title) ? '' : title;
                }
            }
        });

        return modal.result;
    }

    userItems();
}