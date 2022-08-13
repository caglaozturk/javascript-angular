import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserForLogin } from '../../models/userForLogin';
import { UserLoginResponse } from '../../models/userLoginResponse';
import { LocalStorageService } from 'src/app/core/storage/services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiControllerUrl: string = `${environment.apiUrl}/auth`;
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  login(userForLoginModel: UserForLogin): Observable<UserLoginResponse> {
    return this.httpClient.post<UserLoginResponse>(
      this.apiControllerUrl + '/login',
      userForLoginModel
    );
  }
  saveToken(userLoginResponse: UserLoginResponse) {
    this.localStorageService.set('token', userLoginResponse.access_token);
  }
}