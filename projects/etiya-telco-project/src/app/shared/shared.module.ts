import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayTitleComponent } from './components/overlay-title/overlay-title.component';
import { SideFilterComponent } from './components/side-filter/side-filter.component';
import { UserInfoComponent } from './components/user-info/user-info.component';



@NgModule({
  declarations: [
    OverlayTitleComponent,
    SideFilterComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OverlayTitleComponent,
    SideFilterComponent,
    UserInfoComponent
  ]
})
export class SharedModule { }
