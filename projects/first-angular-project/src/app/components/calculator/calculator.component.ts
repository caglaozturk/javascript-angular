import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("app.component init fonksiyonu")
  }
  title = 'my-app';
  name = "Çağla Öztürk TypeScript";
  counter:number = 0;
  increase(count:number = 1){
    this.counter+=count;
  }
  descrease(){
    this.counter--;
  }
  get getCounter(){
    return this.counter.toString() + (this.counter < 5 ? "  Çok az" : "  Çok fazla");
  }

}
