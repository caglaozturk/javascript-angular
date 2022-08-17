import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  constructor(private formBuilder:FormBuilder, private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.createLoginPage()
  }

  createLoginPage(){
    this.loginForm=this.formBuilder.group({
      userName:[''],
      password:['']
    })
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe((response) => {
      if (response.success) {
        this.authService.saveToken(response);
        this.router.navigateByUrl('/')
      }
    });
  }

}
