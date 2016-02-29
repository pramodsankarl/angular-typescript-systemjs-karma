import {ngModule as personModule} from './components/person/person';


let ngModule = angular.module('app', [
    personModule.name
]);

export {
    ngModule
}
