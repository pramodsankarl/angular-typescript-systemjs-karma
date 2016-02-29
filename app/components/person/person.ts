import {PersonController} from './person.controller';
import {PersonComponent} from './person.component';
import {ngModule as servicesModule} from '../../services/services';

let ngModule = angular.module('person',[
    servicesModule.name
]);

ngModule
    .controller('PersonController', PersonController)
    .component('person', PersonComponent);

export {
    ngModule,
    PersonComponent,
    PersonController
};