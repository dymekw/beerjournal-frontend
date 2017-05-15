export default function AccountSettingsController(authService, $scope, $rootScope, $stateParams, $http, $location) {
    let accountSettings = this;
    $scope.userData = {};
    $scope.userData1 = {};
    $scope.errorMessage;

    $http.get('/api/users/' + $rootScope.globals.currentUser.id).then(function (response) {
        $scope.userData = response.data;
    });
    $http.get('/api/users/' + $rootScope.globals.currentUser.id).then(function (response) {
        $scope.userData1 = response.data;
    });

    $scope.updateUser = function () {
        $scope.userData = {
            "avatarFileId" : null,
            "email": $scope.userData.email,
            "id" : $rootScope.globals.currentUser.id,
            "password": $scope.userData.password,
            "lastName": $scope.userData.lastName,
            "firstName": $scope.userData.firstName
        };

        $http.put('/api/account/', this.userData).then(function (res) {
            if ($scope.imageFile != null) {
                $scope.form = [];
                $http({
                    method  : 'POST',
                    url     : '/api/users/' +$rootScope.globals.currentUser.id + '/avatar',
                    processData: false,
                    transformRequest: function (data) {
                        var formData = new FormData();
                        formData.append("file", $scope.imageFile);
                        return formData;
                    },
                    data : $scope.form,
                    headers: {
                        'Content-Type': undefined
                    }
                }).then(function(res){
                    location.reload();
                }, function (error) {
                   console.log(error);

                });
            }
            $location.path("/accountSettings")
        }, function (res) {
            $scope.errorMsg = "Unable to update user";
        });


    };


    $scope.deleteUser = function () {
        if (confirm("Are you sure?") == true) {
            $location.path("/home")
            $http.delete('/api/users/' + $rootScope.globals.currentUser.id);
            authService.logout();
        }
    }

    $scope.previewFile = function () {
        var preview = document.getElementById('image');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();
        document.getElementById("fname").value; //string file url
        reader.addEventListener("load", function () {
            preview.src = reader.result;
        }, false);

        if (file) {
            reader.readAsDataURL(file);
            $scope.imageFile = file;
        }
    }

}
