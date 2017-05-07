export default function itemDetailsController($rootScope, $scope, $http) {
    var itemID = $scope.itemId;
    let user = $rootScope.globals.currentUser;
    $scope.item = {};

    $http.get('/api/items/' + itemID).then(function(res) {
        $scope.item = res.data;

        getCountryCode(res.data.country).then(function(countryCode) {
            if(countryCode) {
                $scope.item.countryImage = 'http://www.geognos.com/api/en/countries/flag/' + countryCode + '.png';
            } else {
                $scope.item.countryImage = 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Missing_flag.png';
            }
        })

        getItemImages(res.data.imageIds);
    });
    
    $scope.close = function () {
        $scope.$dismiss('cancel');
    }

    function getCountryCode(countryName) {
        return $http.get('/api/categories/country').then(function(res) {
            var result;
            angular.forEach(res.data.values, function(country) {
                if (country.name == countryName) {
                    result = country.code;
                }
            });
            return result;
        });
    }

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