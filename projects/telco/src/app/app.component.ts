import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'telco';
  isToken:boolean = false;
  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAuthenticated();
  }
  
  isAuthenticated() {
    this.isToken = this.authService.isAuthenticated;
  }
}
