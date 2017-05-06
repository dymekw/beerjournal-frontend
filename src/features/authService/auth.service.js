export default function ($rootScope, $http, $location, $sessionStorage, $base64, toastr,$facebook) {

    this.login = function (username, password) {
        let user = {};
        user.username = username;
        user.password = password;

        $http({
            method: 'POST',
            url: '/api/login',
            transformRequest: transformObj,
            data: user,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function (res) {
            user.id = res.data;
            const authdata = $base64.encode(user.username + ':' + user.password);
            $sessionStorage.putObject('user', {username: user.username, id: user.id, auth: authdata});
            $rootScope.globals.currentUser = user;

            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
            $location.path('/collections');
        }, function (res) {
            toastr.error('Login failed ', 'Error');
        });
    };

    this.logout = function () {
        $sessionStorage.remove('user');
        $http.defaults.headers.common['Authorization'] = '';
        $rootScope.globals.currentUser = null;
        $location.path('/home');
    };

    this.isLoggedIn = function () {
        return $sessionStorage.get('user') !== null
    };

    this.getCurrentUserName = function () {
        return this.isLoggedIn() ? $sessionStorage.getObject('user').username : ""
    };

    this.getCurrentUser = function () {
        return $sessionStorage.get('user')
    };

    function transformObj(obj) {
        let str = [];
        for (let p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
    }


    this.loginFb = function () {
        $facebook.init();
        $facebook.login().then(function() {
            getFacebookUser();
        });

    }
    function getFacebookUser() {
        $facebook.api("/me").then(
            function(response) {
                console.log(response);
                var fbUser = response;
                const authdata = $base64.encode(fbUser.id + ':' + fbUser.name);
                $sessionStorage.putObject('user', {username: fbUser.name, id: fbUser.id, auth: authdata});
                $rootScope.globals.currentUser = fbUser;
                fbUser.email = fbUser.name;
                fbUser.firstName = fbUser.name;
                fbUser.lastName = fbUser.name;
                fbUser.password = fbUser.name;
                $http.post('/api/users', fbUser)
                    .then(function(res) {
                            console.log(res.data);
                        },
                        function(res) {
                            console.log('Unable to create new user');
                            console.log(res);
                        });

                $location.path('/collections');
            },
            function(err) {
                console.log(err);
            });
    }

}