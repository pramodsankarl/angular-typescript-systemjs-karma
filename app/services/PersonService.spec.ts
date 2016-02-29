import {PersonService, Person, PersonRaw} from './services';

describe("PersonService", ()=>{

    let personService:PersonService,
        $httpBackend:angular.IHttpBackendService,
        personMock:PersonRaw[];

    beforeEach(()=>{
       personMock = [{id:1, firstName:'fName', lastName:'lName', role:'Dev'},
           {id:2, firstName:'fName2', lastName:'lName', role:'Dev'}
       ];
    });

    beforeEach(()=>{
        angular.mock.module('app.services');

        angular.mock.inject((_PersonService_, _$httpBackend_)=>{
            personService = _PersonService_;
            $httpBackend = _$httpBackend_;

            $httpBackend.expectGET('/app/data/people.json').respond(200, personMock);
        });
    });

    it('should return formatted person data', (done)=>{
        personService.getPeople().then((people:Person[])=>{
            expect(people.length).toEqual(personMock.length);
            let mock = personMock[0];
            expect(people[0].name).toEqual(mock.lastName + ', ' + mock.firstName);
            done();
        });
        $httpBackend.flush();
    });

    afterEach(()=>{
        $httpBackend.verifyNoOutstandingRequest();
    });
});