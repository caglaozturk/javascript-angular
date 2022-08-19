import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayTitleComponent } from './components/overlay-title/overlay-title.component';
import { SideFilterComponent } from './components/side-filter/side-filter.component';
import { SettingsMenuComponent } from './components/settings-menu/settings-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { TableInfoComponent } from './components/table-info/table-info.component';
import { WarningMessageComponent } from './components/warning-message/warning-message.component';
import { ConfirmComponent } from './components/confirm/confirm.component';



@NgModule({
  declarations: [
    OverlayTitleComponent,
    SideFilterComponent,
    SettingsMenuComponent,
    NavbarComponent,
    UserInfoComponent,
    TableInfoComponent,
    WarningMessageComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OverlayTitleComponent,
    SideFilterComponent,
    SettingsMenuComponent,
    NavbarComponent,
    UserInfoComponent,
    TableInfoComponent,
    WarningMessageComponent,
    ConfirmComponent
  ]
})
export class SharedModule { }
