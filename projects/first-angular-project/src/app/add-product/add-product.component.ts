import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  email!:string;
  password!:string;
  constructor() { }

  ngOnInit(): void {
    this.email = "Çağla"
    this.onEmailChange()
  }

  onEmailChange(event:any=this.email){
    console.log(`Değer değişti ${event}`)
  }
}
