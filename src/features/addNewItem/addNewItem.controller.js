/**
 * Created by wojciech_dymek on 22.04.17.
 */
export default function AddNewItemController($rootScope, $http, $location, $base64) {
    let vm = this;
    vm.addNewItem = addNewItem;

    //TODO fix auth
    var authdata = $base64.encode('test@gmail.com' + ':' + 'test');
    $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
    $rootScope.globals = {};
    $rootScope.globals.userId='58fbd2b5cc2b6604efeb28ed'

    function addNewItem() {
        vm.item.ownerId = $rootScope.globals.userId;

        $http.post('/api/users/' + vm.item.ownerId + "/collection/items", vm.item).then(function(res) {
            $location.path("/collections")
        }, function(res) {
            console.log(res);
            vm.errorMessage ="Unable to create new item";
        })
    }
}