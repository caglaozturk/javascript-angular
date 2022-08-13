import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './auth/pages/login/login.component';
import { StorageModule } from './storage/storage.module';


@NgModule({
  declarations: [
  
    LoginComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    StorageModule,
  ]
})
export class CoreModule { }
