import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CreateFakeArrayPipe } from './pipes/create-fake-array/create-fake-array.pipe';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';


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
  ]
})
export class CoreModule { }
