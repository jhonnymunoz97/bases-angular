import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ListComponent,
    FormComponent,
  ]
})
export class PersonsModule { }
