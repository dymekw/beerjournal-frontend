import angular from "angular";
import uirouter from "angular-ui-router";
import routing from "./login.routes";

import LoginController from "./login.controller"

export default angular.module('login', [uirouter])
    .controller('LoginController', LoginController)
    .config(routing)
    .name;