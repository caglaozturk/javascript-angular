import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayTitleComponent } from './components/overlay-title/overlay-title.component';
import { SideFilterComponent } from './components/side-filter/side-filter.component';



@NgModule({
  declarations: [
    OverlayTitleComponent,
    SideFilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OverlayTitleComponent,
    SideFilterComponent
  ]
})
export class SharedModule { }
