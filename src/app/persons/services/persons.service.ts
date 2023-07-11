import { Injectable } from '@angular/core';
import { Person } from '../interface/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  persons: Person[] = [];

  constructor() { }

  addPerson(person: Person):void {
    this.persons.push(person);
  }

  deletePerson(cedula:string):void{
    this.persons = this.persons.filter( person => (person.cedula !== cedula)  ? true : false );
  }

  getPerson():Person[]{
    return this.persons;
  }
}
