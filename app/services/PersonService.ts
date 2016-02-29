interface Person {
    id : number;
    name:string;
    role:string;
};

interface PersonRaw{
    id:number;
    firstName:string;
    lastName:string;
    role:string;
    contact ?: {[key:string]:string}[]
}

class PersonService {
    static $inject = [
        '$http'
    ];

    constructor(private $http:angular.IHttpService){}

    getPeople():angular.IPromise<Person[]>{
        return this.$http.get('/app/data/people.json').then((response:{data: PersonRaw[]})=>{
            let {data} = response;
            return data.map(({id, firstName, lastName, role}:PersonRaw)=>({
                id,
                name : lastName + ', ' + firstName,
                role
            }));
        });
    };
}

export {
    Person,
    PersonRaw,
    PersonService
};