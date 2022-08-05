import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private jwtHelperService:JwtHelperService) {}

  /***
   * BE'e gönderirmeden önce interceptor araya giriyor ve oluşturduğumuz isteği klonlayıp içindeki 
   * bazı özellikleri değiştirip BE'e bu yeni isteği gönderir
   */
   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.jwtHelperService.tokenGetter();
    const newRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    });

    return next.handle(newRequest);
  }
}
