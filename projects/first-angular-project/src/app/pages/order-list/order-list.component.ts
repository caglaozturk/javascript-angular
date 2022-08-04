import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderList! : Order[];

  constructor(private orderService:OrdersService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.orderService.getList().subscribe((response) =>{
      this.orderList = response;
    })
  }

}
