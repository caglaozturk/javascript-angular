import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product:any;
  @Output() onBtnClick:any = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.product)
  }

  addToCart(contactName:string){
    this.onBtnClick.emit(contactName);
  }
}
