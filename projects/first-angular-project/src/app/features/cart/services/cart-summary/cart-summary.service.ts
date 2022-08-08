import { EventEmitter, Injectable } from '@angular/core';
import { CartSummaryModel } from '../../models/cartSummaryModel';
import { CartSummaryModels } from '../../models/cartSummaryModels';

@Injectable({
  providedIn: 'root'
})
export class CartSummaryService {

  addCart : EventEmitter<any> = new EventEmitter;

  constructor() { }

  get CartItems():any{
    return CartSummaryModels
  }

  set CartItems(value:CartSummaryModel){
    // console.log(value);
    // console.log(CartSummaryModels)
    let item = CartSummaryModels.find((c) => c.product.id === value.product.id);
    if (item) ++item.quantity;
    else CartSummaryModels.push(value);  
    this.addCart.emit(CartSummaryModels)
  }

  removeFromCart(cartItem:CartSummaryModel){
    let item : any = CartSummaryModels.find(c=>c.product.id===cartItem.product.id);
    CartSummaryModels.splice(CartSummaryModels.indexOf(item),1); //splice silmek için kullanılır (git bellekteki yerini indeksini bul ve 1 tane sil)
  }
}