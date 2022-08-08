import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        let errorMessage = '';

        if (errorResponse.error instanceof ErrorEvent) {
          errorMessage = `Client Side Error: ${errorResponse.error.message}`;
        } else {
          errorMessage = `Server Side Error: ${errorResponse.error.message} Status Code: ${errorResponse.status}`;
        }

        return throwError(errorMessage);
      })
    );
  }
}