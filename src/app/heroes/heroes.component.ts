import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent {

  title:string;
  heroes:string[];
  heroeDelete?:string;

  constructor(){
    this.title = "heroes";
    this.heroes = ['Batman', 'Superman', 'Spiderman', 'Iroman','Hulk'];
  }

  deleteHeroe():void{
    this.heroeDelete = this.heroes.pop();
  }

}
