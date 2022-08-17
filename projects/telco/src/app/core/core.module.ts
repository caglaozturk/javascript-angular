import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';
import { StorageModule } from './storage/storage.module';
import { AuthModule } from './auth/auth.module';
import { StorageService } from './storage/services/storageService';
import {JwtModule, JWT_OPTIONS} from '@auth0/angular-jwt';
import { LocalStorageService } from './storage/services/local-storage/local-storage.service';

export function jwtOptionsFactory(storageService: StorageService) {
  return {
    tokenGetter: () => {
      return storageService.get('token');
    },
    allowedDomains: ['localhost:3000'],
  };
}
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    StorageModule,
    AuthModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [LocalStorageService],
      },
    }),
  ]
})
export class CoreModule { }
