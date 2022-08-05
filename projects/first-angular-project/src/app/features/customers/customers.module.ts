import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    UpdateCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]

})
export class CustomersModule { }
