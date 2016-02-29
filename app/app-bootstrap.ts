import {ngModule as app} from './app';

angular.element(document).ready(()=>{
    angular.bootstrap(document,[app.name]);
});