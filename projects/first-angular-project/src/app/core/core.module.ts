import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { IfNotDirective } from './directives/ifNot/if-not.directive';


@NgModule({
  declarations: [
    IfNotDirective
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
  //İfmodule'ı kullanan moduller de görebilsin diye burda import etmemiz gerekiyor
})
export class CoreModule { }
