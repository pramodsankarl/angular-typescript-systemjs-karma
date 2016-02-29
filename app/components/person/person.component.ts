import {PersonController} from './person.controller';

export const PersonComponent:angular.IComponentOptions = {
    templateUrl: 'app/components/person/person.html',
    controller : PersonController,
    controllerAs : 'personCtrl'
};