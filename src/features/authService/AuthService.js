/**
 * Created by wojciech_dymek on 22.04.17.
 */
export default function AuthService($rootScope, $cookies, $http, $location) {
    var service = {};
    service.Auth = Auth;
    service.SetCredential = SetCredential;

    return service;

    function Auth(user) {
        $http.post('/rest/users/auth', user).then(function(res) {
            SetCredential(user.username, res.data)
            $location.path('/collections');
        }, handleError('Error auth user'));
    }

    function SetCredential(username, token) {
        $rootScope.globals = {
            currentUser: {
                username: username,
                authdata: token
            }
        };

        // set default auth header for http requests
        $http.defaults.headers.common['Authorization'] = 'Basic ' + token;

        // store user details in globals cookie that keeps user logged in for 1 week (or until they logout)
        var cookieExp = new Date();
        cookieExp.setDate(cookieExp.getDate() + 7);

        $cookies.put('globals', $rootScope.globals, { expires: cookieExp });
    }

    // private functions

    function handleSuccess(res) {
        return res;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
    }
}