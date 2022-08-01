import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customers/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customerForm!:FormGroup;
  customer!: Customer
  constructor(private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute,
    private customerService:CustomerService, private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCustomerIdFromRoute();
  }

  createCustomerForm(): void{
    this.customerForm = this.formBuilder.group({
      companyName: [this.customer?.companyName || "",Validators.required],
      contactName: [this.customer?.contactName || "",Validators.required],
      contactTitle: [this.customer?.contactTitle || "",Validators.required],
      street: [this.customer?.street || "",Validators.required],
      city: [this.customer?.city || "",Validators.required],
      region: [this.customer?.region || "",Validators.required],
      postalCode: [this.customer?.postalCode || "",Validators.required],
      country: [this.customer?.country || "",Validators.required],
      phone: [this.customer?.phone || "",Validators.required],
      customerKey: [this.customer?.customerKey || "",Validators.required]
    })   
  }

  getCustomerIdFromRoute() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.getCustomerById(params['id']);
      else this.createCustomerForm();
    });
  }

  getCustomerById(id:number) {
    this.customerService.getCustomerById(id).subscribe((data) => {
      this.customer = data;
      this.createCustomerForm();
    });
  }

  save() {
    if(this.customer) this.update();
    else this.add();
  }

  showSuccess(message:string, title:string) {
    this.toastr.success(message, title);
  }

  showWarning(message:string, title:string) {
    this.toastr.warning(message, title);
  }

  add() {
    if(this.customerForm.invalid){
      this.showWarning("Please fill the required areas!!!","Warning")
      return;
    }
    const customer:Customer = {
      ...this.customerForm.value,
      city: this.customerForm.value.city.toUpperCase()
    }

    this.customerService.add(customer).subscribe(response => {
      this.showSuccess("Customer succesfully created!","Success")
      this.router.navigateByUrl("/dashboard/customers")
    })
  }

  update() {
    if(this.customerForm.invalid){
      this.showWarning("Please fill the required areas!!!","Warning")
      return;
    }
    const customer:Customer = Object.assign({id: this.customer.id}, this.customerForm.value);
    this.customerService.update(customer).subscribe((data) => {
      this.showSuccess("Customer succesfully updated!","Success")
      this.router.navigateByUrl("/dashboard/customers")
    });
  }

}