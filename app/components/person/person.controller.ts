import {
    PersonService,
    Person
} from '../../services/services';

export class PersonController {
    people:Person[];
    hasError:boolean;
    static $inject = ['PersonService'];

    constructor(private personService:PersonService) {
        this.init();
    }

    init() {
        this.personService.getPeople()
            .then((people)=> this.people = people)
            .catch(()=> this.hasError = true);
    }
}