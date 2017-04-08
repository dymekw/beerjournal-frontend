import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './collections.routes';
import CollectionsController from './collections.controller';

export default angular.module('collections', [uirouter])
    .config(routing)
    .controller('CollectionsController', CollectionsController)
    .name;