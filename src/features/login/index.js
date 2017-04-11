import angular from "angular";
import uirouter from "angular-ui-router";
import routing from "./login.routes";

export default angular.module('login', [uirouter])
    .config(routing)
    .name;