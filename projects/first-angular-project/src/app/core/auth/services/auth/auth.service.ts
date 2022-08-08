import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { MessageResultModel } from 'src/app/core/models/messageResultModel';
import { LocalStorageService } from 'src/app/core/storage/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { UserForLoginModel } from '../../models/userForLoginModel';
import { UserLoginResponseModel } from '../../models/userLoginResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiControllerUrl: string = `${environment.apiUrl}/auth`;

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService,
    private jwtHelperService:JwtHelperService) {}

  login(userForLoginModel: UserForLoginModel): Observable<UserLoginResponseModel> {
    return this.httpClient.post<UserLoginResponseModel>(
      `${this.apiControllerUrl}/login`,
      userForLoginModel
    );
  }

  logOut() {
    this.localStorageService.remove('access_token');
  }

  saveAuth(userLoginResponseModel: UserLoginResponseModel) {
    this.localStorageService.set('access_token', userLoginResponseModel.access_token);
  }

  test(): Observable<MessageResultModel> {
    return this.httpClient.get<MessageResultModel>(`${this.apiControllerUrl}/test`);
  }

  get isAuthenticated():boolean {
    //token var mı
    if(!this.jwtHelperService.tokenGetter())  return false;
    //tokenin süresi geçmiş mi?
    if(this.jwtHelperService.isTokenExpired()) return false;
    return true;
  }
}

export function tokenGetter() {
  return localStorage.getItem("access_token");
}