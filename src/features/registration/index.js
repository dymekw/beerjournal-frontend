/**
 * Created by wojciech_dymek on 19.04.17.
 */
import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'angular-material';

import routing from './registration.routes';
import RegistrationController from './registration.controller';

export default angular.module('registration', [uirouter, 'ngMaterial'])
    .controller('RegistrationController', RegistrationController)
    .config(routing)
    .name;