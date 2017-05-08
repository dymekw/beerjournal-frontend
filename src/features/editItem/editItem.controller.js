export default function EditItemController($scope, $rootScope, $stateParams, $http, $location, $uibModal, $base64) {
    $scope.updatedItem = {};
    $scope.errorMsg;

    $http.get('/api/items/' + $stateParams.id).then(function(res) {
        $scope.updatedItem = res.data;
    });

    $scope.save = function () {
        this.userId = $rootScope.globals.currentUser.id;

        $http.put('/api/users/' + this.userId + "/collection/items/" + this.updatedItem.id, this.updatedItem).then(function(res) {
            $location.path("/collections")
        }, function(res) {
            $scope.errorMsg ="Unable to update item";
        })
    };

    var modalInstance;

    $scope.open = function () {
        modalInstance = $uibModal.open({
            templateUrl: '/fileSelector.html',
            scope: $scope,
            windowClass: 'small'
        });
    };

    $scope.uploadFiles = function (files, errFiles) {
        $scope.files = files;
        $scope.errFiles = errFiles;

        angular.forEach(files, function (file) {
            var reader = new FileReader();
            reader.onload =
                (function (theFile) {
                    return function (e) {
                        $scope.$apply(function () {
                            reader.result;
                        });
                    };
                })(file);
        });
        modalInstance.close();
    };


    $scope.previewFile = function() {
        var preview = document.querySelector('img');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
        document.getElementById("fname").value ; //string file url
        reader.addEventListener("load", function () {
            preview.src = reader.result;
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }
}