import { Component, OnInit } from '@angular/core';
import { Product } from './features/products/models/product';

@Component({
  selector: 'app-root',
  //template: '<h3>Çağla Öztürk</h3>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    console.log("app.component init fonksiyonu")
  }
  // rem: ilgili cihazdaki varsayılan paragraf byutu genelde bilgisayarlarda 16px olur
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
