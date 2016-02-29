import {
    PersonService,
    Person,
    PersonRaw
} from './PersonService';

let ngModule  =  angular.module('app.services', []);

ngModule.service('PersonService', PersonService);

export {
    ngModule,
    PersonService,
    Person,
    PersonRaw
};