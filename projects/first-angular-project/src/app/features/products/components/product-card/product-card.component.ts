import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/features/products/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!:Product;
  @Output() onBtnClick:any = new EventEmitter();
  isCard:boolean = true;
  onMouseColor = 'blue';
  onSaleText = "İndirim!!!";
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(){
    this.onBtnClick.emit(this.product);
  }
}
