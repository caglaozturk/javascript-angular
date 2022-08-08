import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authReducers } from './store/auth.reducer';
import { environment } from 'src/environments/environment';
import { tokenGetter } from './services/auth/auth.service';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.apiUrl],
        disallowedRoutes: []
      }
    }),
    StoreModule.forRoot(authReducers)
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class AuthModule {}