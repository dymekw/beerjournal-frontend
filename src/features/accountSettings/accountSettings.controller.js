export default function AccountSettingsController($scope, $rootScope, $stateParams, $http, $location, $uibModal, $base64) {
    $scope.userData = {};
    $scope.errorMsg;

    $http.get('/api/users/' +  this.userId).then(function(response) {
        $scope.userData = response.data;
    });

    $scope.update = function () {
      
    };

}
