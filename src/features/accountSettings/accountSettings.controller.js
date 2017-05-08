export default function AccountSettingsController(authService, $scope, $rootScope, $stateParams, $http, $location) {
    let accountSettings = this;
    $scope.userData = {};
  $scope.userData1 = {};
    $scope.errorMessage;

    $http.get('/api/users/' +  $rootScope.globals.currentUser.id).then(function(response) {
        $scope.userData = response.data;
    });
 $http.get('/api/users/' +  $rootScope.globals.currentUser.id).then(function(response) {
        $scope.userData1 = response.data;
    });

    $scope.updateUser = function () {  
        $scope.userData = { 
             "email": $scope.userData.email,

            "password": $scope.userData.password,
            "lastName" : $scope.userData.lastName,
            "firstName": $scope.userData.firstName
};
       
     $http.put('/api/users/' + $rootScope.globals.currentUser.id, this.userData).then(function(res) {
            $location.path("/accountSettings")
        }, function(res) {
            $scope.errorMsg ="Unable to update user";
        });
        
    
    };


    $scope.deleteUser = function() {
        if (confirm("Are you sure?") == true) {
         $location.path("/home")
         $http.delete('/api/users/' + $rootScope.globals.currentUser.id);
            authService.logout();
    } 
}

}
