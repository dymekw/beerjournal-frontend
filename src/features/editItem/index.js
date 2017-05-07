import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'angular-material';

import routing from './editItem.routes';
import EditItemController from './editItem.controller';

export default angular.module('EditItemController', [uirouter, 'ngMaterial','ui.bootstrap', 'base64'])
    .controller('EditItemController', EditItemController)
    .config(routing)
    .name;
