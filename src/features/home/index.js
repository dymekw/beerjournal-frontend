import angular from "angular";
import uirouter from "angular-ui-router";
import routing from "./home.routes";

export default angular.module('home', [uirouter])
    .config(routing)
    .name;