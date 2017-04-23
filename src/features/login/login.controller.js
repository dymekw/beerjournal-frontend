/**
 * Created by wojciech_dymek on 21.04.17.
 */
export default function LoginController(AuthService) {
    let vm = this;
    vm.login = login;

    function login() {
        let user = {}
        user.username=vm.username
        user.password=vm.password
        AuthService.Auth(user)
    }
}