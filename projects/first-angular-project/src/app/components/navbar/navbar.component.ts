import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links:any[] = [
    {label: 'Home', url : '/homepage'},
    {label: 'Add Product', url : '/add-product'},
    {label: 'Calculator', url : '/calculator'},
    {label: 'Register', url : '/register'},
    {label: 'Product Cart List', url : '/product-cart-list'}    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
