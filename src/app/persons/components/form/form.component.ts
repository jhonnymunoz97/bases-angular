import { Component } from '@angular/core';
import { PersonsService } from '../../services/persons.service';
import { Person } from '../../interface/Person';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {

  person:Person = {
    id:'',
    cedula:'',
    name:''
  }
  flagName:boolean = false;
  flagCedula:boolean = false;
  constructor(
    private personService:PersonsService
  ){}

  addPerson():void{
    this.flagName = (this.person.name.length===0) ? true : false;
    this.flagCedula = (this.person.cedula.length===0) ? true : false;
    if(this.flagCedula || this.flagName) return;
    this.personService.addPerson(this.person);
    this.person = {
      id:'',
      cedula:'',
      name:''
    }
  }

}
