import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent {
  title:string;
  count:number;

  constructor(){
    this.count = 0;
    this.title = 'Contador';
  }
  countIncrement = () => this.count++;
  countDecrease = () => this.count--;

}
