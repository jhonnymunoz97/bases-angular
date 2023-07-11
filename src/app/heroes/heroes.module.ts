import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';



@NgModule({
  declarations: [
    HeroesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeroesComponent
  ]
})
export class HeroesModule { }
