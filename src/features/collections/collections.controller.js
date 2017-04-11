export default function CollectionsController($scope, FileUploader) {
    this.name = 'Hello';
    $scope.currentNavItem = 'bottles';
    $scope.showPrompt = function (event) {
        $scope.chooseFile = true;
    };

    var uploader = $scope.uploader = new FileUploader({
        url: ''
    });

    // CALLBACKS
    uploader.onErrorItem = function (fileItem, response, status, headers) {
        console.info('onErrorItem', fileItem, response, status, headers);
        $scope.chooseFile = false;
    };

    $scope.photos = function (type) {
        var res = [];
        if (type == "bottles") {
            res.push('uploads/bottles/download.jpeg');
        }
        return res;
    }
}


