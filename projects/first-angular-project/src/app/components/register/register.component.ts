import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  // companyName = new FormControl('kodlama.io', Validators.required);
  // bu şekilde olursa html de [formControl]="companyName" böyle kullanmalıyız

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      companyName: ['', [Validators.required, Validators.minLength(2)]],   // ['']: default değer boş
      contactName: ['', [Validators.required, Validators.minLength(2)]],
      contactTitle: ['', [Validators.required, Validators.minLength(2)]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      region: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      customerKey: ['', [Validators.required]]
    })
    // new FormGroup({
    //   companyName: this.companyName
    // }) 
  }
  register() {
    if(this.registerForm.invalid){
      console.log("gerekli alanları doldurunuz")
      return;
    }
    console.log(this.registerForm.value)
  }
}