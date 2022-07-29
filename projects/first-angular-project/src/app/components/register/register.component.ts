import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customers/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  // companyName = new FormControl('kodlama.io', Validators.required);
  // bu şekilde olursa html de [formControl]="companyName" böyle kullanmalıyız

  constructor(private formBuilder:FormBuilder, private customerService:CustomerService) { }

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

    const customer:Customer = {
      ...this.registerForm.value,      // object, array
      city: this.registerForm.value.city.toUpperCase()
      //companyName: this.registerForm.get('companyName')!.value
    }

    this.customerService.add(customer).subscribe(response => {
      console.info(response)
    })
  }
}