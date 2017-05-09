export default function AllUsersController($rootScope, $scope, $http,$uibModal,Lightbox,$base64) {
 
    let user = $rootScope.globals.currentUser;

    $scope.username = user.username;
    $scope.currentNavItem = "users";
    $scope.users = [];

    $scope.showItems = false;

    $scope.images = [
        {
            'url': 'https://farm6.staticflickr.com/5830/20552523531_e1efec8d49_k.jpg',
            'shouldShow' : 'true'
        },
        {
            'url': 'https://farm8.staticflickr.com/7300/12807911134_ff56d1fb3b_b.jpg',
            'shouldShow' : 'true'
        },
        {
            'url': 'https://farm1.staticflickr.com/400/20228789791_52fb84917f_b.jpg',
            'shouldShow' : 'true'
        },
        {
            'url': 'https://farm1.staticflickr.com/260/20185156095_912c2714ef_b.jpg'
        },
        {
            'url': 'https://farm6.staticflickr.com/5757/20359334789_57316968ed_m.jpg',
            'shouldShow' : 'true'
        },
        {
            'url': 'https://farm1.staticflickr.com/359/18741723375_28c89372d7_c.jpg'
        },
    ];


    function getUsersFromServer () {
        $http.get('/api/users/')
            .then(function (response) {
                $scope.users = response.data;
                var usersId = [];
                $scope.users.forEach(function (user) {
                    user.images = [];
                    usersId.push(user.id);
                })
                getUserCollections(usersId);
            }, function (error) {
                console.log(error);
            });
    }

   getUsersFromServer();

    $scope.openLightboxModal = function (index,images) {
        Lightbox.openModal(images, index);
    };

    $scope.showUserItems = function (user) {
        $scope.selectedUser = user;
        $scope.selectedUser.username = user.firstName + ' ' + user.lastName;
        $scope.showItems = true;
    }

    $scope.back = function () {
        $scope.showItems = false;
    }


    function getUserCollections(usersId) {
        usersId.forEach(function (id) {
            $http.get('api/users/'+id+'/collection/items')
                .then(function (response) {
                    var userItem = {};
                    userItem.id = id;
                    userItem.images = [];
                    response.data.forEach(function (item) {
                      $http.get('/api/items/'+item.itemId)
                            .then(function (res) {
                                res.data.imageIds.forEach(function (imageId) {
                                    userItem.images = ['/api/files/' + imageId];
                                    createImagesCollection(userItem);
                                })
                            }, function (error) {
                                console.log(error);
                            });
                    })
                }, function (error) {
                    console.log(error);
                });

        })
    }

    var createImagesCollection = function (userItem) {
        var imageTabObj = $scope.users.filter(function(v) {
            return v.id === userItem.id;
        })[0];
        if(imageTabObj.images!=null) {
            imageTabObj.images = imageTabObj.images.concat(userItem.images)
            removeByAttr($scope.users, 'id', imageTabObj.id);
            $scope.users.push(imageTabObj);
        }else{
            imageTabObj.images = userItem.images;
            removeByAttr($scope.users,'id',imageTabObj.id);
            $scope.users.push(imageTabObj);
        }
    }



    var removeByAttr = function(arr, attr, value){
        var i = arr.length;
        while(i--){
            if( arr[i]
                && arr[i].hasOwnProperty(attr)
                && (arguments.length > 2 && arr[i][attr] === value ) ){
                arr.splice(i,1);
            }
        }
        return arr;
    }




}





