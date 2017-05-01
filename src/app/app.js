import angular from "angular";
import uirouter from "angular-ui-router";
import "angular-material";
import "angular-base64"
import "angular-sessionstorage"

import "../style/app.css";
import "../style/common.css";
import "../style/navbar.css";

import routing from "./app.config.js";
import collections from "../features/collections";
import login from "../features/login";
import registration from "../features/registration"
import home from "../features/home";
import allusers from "../features/allusers"
import navbar from "../features/navbar"
import authService from "../features/authService"
import AddNewItemController from "../features/addNewItem"

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, collections, login, registration, home, allusers, navbar, authService, AddNewItemController, 'ngSessionStorage', 'ngMaterial','base64'])
    .config(routing)
    .run(run);

run.$inject = ['$rootScope', '$location', '$sessionStorage', '$http', '$base64'];
function run($rootScope, $location, $sessionStorage, $http, $base64) {
    $rootScope.globals = {};
    $rootScope.globals.currentUser = $sessionStorage.getObject('user');

    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = $rootScope.globals.currentUser.auth;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        let loggedIn = $rootScope.globals && $rootScope.globals.currentUser;
        if (!loggedIn && $location.path() !== "/login" && $location.path() !== "/registration") {
            $location.path('/home');
        }
        if (loggedIn && $location.path() === "/login") {
            $location.path('/collections');
        }
    });
}


export default MODULE_NAME;
