import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { SpinnerHandlerService } from '../../services/spinner-handler/spinner-handler.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(
    public spinnerHandler: SpinnerHandlerService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.method != 'GET')  this.spinnerHandler.handleRequest('plus');
    return next
      .handle(request)
      .pipe(
        finalize(()=>{
          setTimeout(() => {
            this.spinnerHandler.handleRequest();
          }, 3000);          
        })
      );
  }
  finalize = (): void => this.spinnerHandler.handleRequest();
}
