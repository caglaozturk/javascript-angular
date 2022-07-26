import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToolbarModule} from 'primeng/toolbar';
import { ServicesRoutingModule } from './services-routing.module';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ServiceFormComponent } from './components/service-form/service-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SkeletonModule } from "primeng/skeleton";
import { BootstrapListComponent } from './components/bootstrap-list/bootstrap-list.component';

@NgModule({
  declarations: [
    ServiceListComponent,
    ServiceFormComponent,
    BootstrapListComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    TableModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToolbarModule,
    SharedModule,
    SkeletonModule
  ],
  exports: [ ServiceListComponent ]
})
export class ServicesModule { }
