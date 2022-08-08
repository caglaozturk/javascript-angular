import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { IfNotDirective } from './directives/ifNot/if-not.directive';
import { AuthModule } from './auth/auth.module';
import { StorageModule } from './storage/storage.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandlingInterceptor } from './auth/interceptors/error-handling/error-handling.interceptor';


@NgModule({
  declarations: [
    IfNotDirective
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AuthModule,
    StorageModule
  ],
  exports: [
    IfNotDirective
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true }]
  //İfmodule'ı kullanan moduller de görebilsin diye burda import etmemiz gerekiyor
})
export class CoreModule { }
