import { Component } from '@angular/core';
import { PersonsService } from '../../services/persons.service';
import { Person } from '../../interface/Person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {

  constructor(
    private personService:PersonsService
  ){}

  getAllPerson():Person[]{
    return this.personService.getPerson();
  }

  deletePerson(person:Person):void{
    this.personService.deletePerson(person.cedula);
  };
}
