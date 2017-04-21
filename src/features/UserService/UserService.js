/**
 * Created by wojciech_dymek on 20.04.17.
 */
export default function UserService($http) {
    var service = {};

    service.Create = Create;

    return service;

    function Create(user) {
        return $http.post('/rest/users', user).then(handleSuccess, handleError('Error creating user'));
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