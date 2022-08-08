import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';
import { Observable, map  } from 'rxjs';
import { MessageResultModel } from 'src/app/core/models/messageResultModel';
import { LocalStorageService } from 'src/app/core/storage/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { TokenUserModel } from '../../models/tokenUserModel';
import { UserForLoginModel } from '../../models/userForLoginModel';
import { UserLoginResponseModel } from '../../models/userLoginResponseModel';
import { removeTokenUserModel, setTokenUserModel } from '../../store/actions/auth.actions';
import { AuthStates } from '../../store/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenUserModel$: Observable<TokenUserModel | undefined> = this.store
  .select(state => state.appAuth)
  .pipe(map(state => state.tokenUserModel));

  apiControllerUrl: string = `${environment.apiUrl}/auth`;

  constructor(
    private httpClient: HttpClient, 
    private localStorageService: LocalStorageService,
    private jwtHelperService: JwtHelperService,
    private store: Store<AuthStates>
  ) {}

  login(userForLoginModel: UserForLoginModel): Observable<UserLoginResponseModel> {
    return this.httpClient.post<UserLoginResponseModel>(
      `${this.apiControllerUrl}/login`,
      userForLoginModel
    );
  }

  removeTokenUserModel() {
    this.store.dispatch(removeTokenUserModel());
  }

  logOut() {
    this.localStorageService.remove('access_token');
    this.removeTokenUserModel();
  }

  saveAuth(userLoginResponseModel: UserLoginResponseModel) {
    this.localStorageService.set('access_token', userLoginResponseModel.access_token);
    this.setTokenUserModel(this.jwtHelperService.decodeToken(this.jwtHelperService.tokenGetter()));
  }

  test(): Observable<MessageResultModel> {
    return this.httpClient.get<MessageResultModel>(`${this.apiControllerUrl}/test`);
  }

  setTokenUserModel(tokenUserModel: TokenUserModel) {
    this.store.dispatch(setTokenUserModel({ tokenUserModel })); // tokenUserModel -> tokenUserModel:tokenUserModel ile aynı
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