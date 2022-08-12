import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';
import { CreateFakeArrayPipe } from './pipes/create-fake-array/create-fake-array.pipe';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading-interceptor/loading-interceptor.interceptor';
import { StorageModule } from './storage/storage.module';
import { LoginComponent } from './auth/pages/login/login.component';

@NgModule({
  declarations: [
    CreateFakeArrayPipe,
    LoadingOverlayComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    StorageModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateFakeArrayPipe,
    LoadingOverlayComponent
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }]
})
export class CoreModule { }
