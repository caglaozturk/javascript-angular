import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/services/auth/auth.service';
import { CartSummaryService } from 'src/app/features/cart/services/cart-summary/cart-summary.service';

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
    {label: 'Register', url : '/dashboard/customer/add'},
    {label: 'Product Cart List', url : '/product-cart-list'}, 
    {label: 'Orders', url: '/order-list'},
    {label: 'Customer Dashboard', url: '/dashboard/customers'},
    {label: 'Product Dashboard', url: '/dashboard/products'}
  ]
  constructor(private authService:AuthService, private cartSummaryService:CartSummaryService) { }

  ngOnInit(): void {
  }

  isLoggedIn(){
    return this.authService.isAuthenticated
  }

  logOut() {
    this.authService.logOut();
  }

  testAuth() {
    this.authService.test().subscribe(response => {
      console.log(response);
    });
  }

}
