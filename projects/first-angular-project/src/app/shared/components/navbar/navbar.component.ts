import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/services/auth/auth.service';

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
    {label: 'Product Cart List', url : '/product-cart-list'}    
  ]
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  testAuth() {
    this.authService.test().subscribe(response => {
      console.log(response);
    });
  }

}
