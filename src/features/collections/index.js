import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'angular-material';
import 'angular-upload';

import routing from './collections.routes';
import CollectionsController from './collections.controller';

export default angular.module('collections', [uirouter, 'ngMaterial'])
    .controller('CollectionsController', CollectionsController)
    .config(routing)
    .name;