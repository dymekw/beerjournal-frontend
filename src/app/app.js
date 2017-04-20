import angular from "angular";
import uirouter from "angular-ui-router";
import "angular-material";

import "../style/app.css";

import routing from "./app.config.js";
import collections from "../features/collections";
import login from "../features/login";
import registration from "../features/registration"
import home from "../features/home";

let app = () => {
    return {
        template: require('./app.html'),
        controllerAs: 'app'
    }
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, collections, login, registration, home, 'ngMaterial'])
    .directive('app', app)
    .config(routing);


export default MODULE_NAME;