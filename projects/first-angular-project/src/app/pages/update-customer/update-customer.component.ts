import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customers/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  updateCustomerForm! : FormGroup;
  selectedId!:number;
  customer!: Customer
  constructor(private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomerById();
  }

  createUpdateCustomerForm(): void{
    this.updateCustomerForm = this.formBuilder.group({
      id:[this.customer.id,Validators.required],
      companyName: [this.customer.companyName,Validators.required],
      contactName: [this.customer.contactName,Validators.required],
      contactTitle: [this.customer.contactTitle,Validators.required],
      street: [this.customer.street,Validators.required],
      city: [this.customer.city,Validators.required],
      region: [this.customer.region,Validators.required],
      postalCode: [this.customer.postalCode,Validators.required],
      country: [this.customer.country,Validators.required],
      phone: [this.customer.phone,Validators.required],
      customerKey: [this.customer.customerKey,Validators.required],

    })   
  }

  getCustomerById() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.selectedId = params['id'];
    });
    this.customerService.getCustomerById(this.selectedId).subscribe((data) => {
      this.customer = data;
      this.createUpdateCustomerForm();
    });
  }

  update() {
    if(this.updateCustomerForm.invalid){
      alert("Please fill the required areas!!!")
      return;
    }
    this.customer = Object.assign({}, this.updateCustomerForm.value);
    this.customerService.update(this.customer).subscribe((data) => {
      setTimeout(() => {
        location.reload();
        location.href="/dashboard/customer"
        alert("Customer succesfully updated!")
      }, 1000);
    });
  }

}