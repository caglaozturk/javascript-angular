import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { CustomerDemographicInfo } from 'src/app/features/customers/models/customerDemographicInfo';
import { CustomerState } from 'src/app/features/customers/store/customer.reducer';
import { setDemographicInfo } from 'src/app/features/customers/store/customerToAdd/customerToAdd.actions';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    middleName: new FormControl('',Validators.required),
    lastName: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    gender: new FormControl('Female', Validators.required),
    fatherName: new FormControl('', Validators.required),
    motherName: new FormControl('', Validators.required),
    nationalityId: new FormControl('', Validators.required),
  });
  constructor(private customerStore:Store<CustomerState>, private router:Router, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  addDemographicInfo() {
    if(this.profileForm.invalid){
      this.messageService.add({severity:'warn', summary: 'Warn', detail: 'Please fill the required areas!!!'});
      return;
    }
    const demographicInfo:CustomerDemographicInfo = Object.assign(this.profileForm.value)
    this.customerStore.dispatch(setDemographicInfo(demographicInfo))
    this.router.navigateByUrl("")
  }
}
