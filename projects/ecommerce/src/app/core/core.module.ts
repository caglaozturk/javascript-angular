import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CreateFakeArrayPipe } from './pipes/create-fake-array/create-fake-array.pipe';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading-interceptor/loading-interceptor.interceptor';


@NgModule({
  declarations: [
    CreateFakeArrayPipe,
    LoadingOverlayComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    CreateFakeArrayPipe,
    LoadingOverlayComponent
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }]
})
export class CoreModule { }
