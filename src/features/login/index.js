import angular from "angular";
import uirouter from "angular-ui-router";
import routing from "./login.routes";

import LoginController from "./login.controller"

import ToastService from "../services/toast"

export default angular.module('login', [uirouter])
    .controller('LoginController', LoginController)
    .config(routing)
    .service('Toast',ToastService)
    .name;