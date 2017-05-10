export default function itemDetailsController($rootScope, $scope, $http, countriesProvider) {
    var itemID = $scope.itemId;
    var ownerID = $scope.ownerId;
    let user = $rootScope.globals.currentUser;
    $scope.item = {};

    $http.get('/api/items/' + itemID).then(function(res) {
        $scope.item = res.data;
        countriesProvider.getCountryFlag(res.data.country)
                            .then(function(flag) {
                                $scope.item.countryImage =  flag;
                            });
        getItemImages(res.data.imageIds);
    });
    
    $scope.close = function () {
        $scope.$dismiss('cancel');
    };

    function getItemImages(imageIds) {
        if(imageIds){
            $scope.item.images = [];
            angular.forEach(imageIds, function(imageId) {
                $scope.item.images.push('/api/files/' + imageId);
            });
        } else {
            $scope.item.images = ['http://www.howderfamily.com/graphics/howder-beer.jpg'];
        }
    }
}