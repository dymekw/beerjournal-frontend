import angular from "angular";
import uirouter from "angular-ui-router";
import routing from "./login.routes";
import "ng-facebook";

import LoginController from "./login.controller"

export default angular.module('login', [uirouter,'ngFacebook'])
    .controller('LoginController', LoginController)
    .config( function( $facebookProvider ) {
        $facebookProvider.setAppId('1618894634805119');
    })
    .config(routing)
    .run( function( $rootScope ) {
        (function(){
            if (document.getElementById('facebook-jssdk')) {return;}
            var firstScriptElement = document.getElementsByTagName('script')[0];
            var facebookJS = document.createElement('script');
            facebookJS.id = 'facebook-jssdk';
            facebookJS.src = '//connect.facebook.net/en_US/all.js';
            firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
        }());
    })
    .name;