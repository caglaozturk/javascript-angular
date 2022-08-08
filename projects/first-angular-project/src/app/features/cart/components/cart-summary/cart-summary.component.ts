import { Component, OnInit } from '@angular/core';
import { CartSummaryModel } from '../../models/cartSummaryModel';
import { CartSummaryService } from '../../services/cart-summary/cart-summary.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartSummary!:CartSummaryModel[];

  constructor(private cartSummaryService:CartSummaryService) { }

  ngOnInit(): void {    
    this.showCartSummary();
  }

  showCartSummary(){
    this.cartSummaryService.addCart.subscribe(cartItem =>{
      this.cartSummary = cartItem
    })
  }

  removeFromCart(cartItems:CartSummaryModel){
    this.cartSummaryService.removeFromCart(cartItems)
  }

}