/**
 * Created by wojciech_dymek on 21.04.17.
 */
export default function LoginController($rootScope, $http, $location, $cookies, $base64) {
    let vm = this;
    vm.login = login;

    function login() {
        let user = {}
        user.username=vm.username
        user.password=vm.password

        $http({method: 'POST', url: '/api/login', transformRequest: transformObj, data: user, headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(function(res) {
            user.id = res.data
            $cookies.put('user', user)
            $rootScope.globals.currentUser = user;

            var authdata = $base64.encode(user.username + ':' + user.password);
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
            $location.path('/collections');
        }, function(res) {
            console.log('Login failed');
            console.log(res)
        });
    }

    function transformObj(obj) {
        var str = [];
        for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
    }
}