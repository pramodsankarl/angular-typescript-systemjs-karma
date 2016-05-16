import {Person, PersonService} from '../../services/services';
import {PersonController} from './person.controller';

describe('Person Controller',()=>{
    let PersonService:PersonService,
        ctrl:PersonController,
        digest : ()=>void,
        peopleMock:Person[];

    beforeEach(()=>{
        peopleMock= <Person[]>[{id:1},{id:2}];
        PersonService = jasmine.createSpyObj<PersonService>('PersonService', ['getPeople']);
    });

    beforeEach(()=>{
        angular.mock.module('person');

        angular.mock.inject(($controller:angular.IControllerService, $q:angular.IQService, $rootScope:angular.IRootScopeService)=>{
            (<jasmine.Spy>PersonService.getPeople).and.returnValue($q.when(peopleMock));
            ctrl = $controller<PersonController>('PersonController',{ PersonService });
            ctrl.$onInit();
            digest = ()=> $rootScope.$digest();
        });
    });

    it('should populate people', ()=>{
        expect(ctrl.people).not.toBeDefined();
        digest();
        expect(ctrl.people.length).toEqual(peopleMock.length);
    });
});
