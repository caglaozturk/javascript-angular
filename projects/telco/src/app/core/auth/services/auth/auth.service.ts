import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserForLogin } from '../../models/userForLogin';
import { UserLoginResponse } from '../../models/userLoginResponse';
import { LocalStorageService } from 'src/app/core/storage/services/local-storage/local-storage.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiControllerUrl: string = `${environment.apiUrl}/auth`;
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private jwtHelperService: JwtHelperService,
    private router: Router
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

  get isAuthenticated(): boolean {
    if (this.jwtHelperService.isTokenExpired()) return false;
    return true;
  }

  logOut() {
    this.localStorageService.remove('token');
    this.router.navigateByUrl('');
  }
}