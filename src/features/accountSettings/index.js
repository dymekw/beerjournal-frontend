import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'angular-material';
import 'angular-file-upload';

import routing from './accountSettings.routes';
import AccountSettingsController from './accountSettings.controller';

export default angular.module('accountSetings', [uirouter, 'ngMaterial', 'angularFileUpload'])
    .controller('AccountSettingsController', AccountSettingsController)
    .config(routing)
    .name;
