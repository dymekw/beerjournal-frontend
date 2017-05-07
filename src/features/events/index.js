import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'angular-material';
import 'angular-file-upload';

import routing from './events.routes';
import EventsController from './events.controller';

export default angular.module('events', [uirouter, 'ngMaterial', 'angularFileUpload'])
    .controller('EventsController', EventsController)
    .config(routing)
    .name;
