import angular from "angular";
import _authService from "./auth.service"

export default angular.module("authService", [])
    .service('authService', _authService)
    .name;