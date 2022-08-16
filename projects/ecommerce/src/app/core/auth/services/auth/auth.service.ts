import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { LocalStorageService } from 'src/app/core/storage/services/local-storage/local-storage.service';
import { UserLoginResponse } from '../../models/UserLoginResponse';
import { UserForLogin } from '../../models/UserForLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiControllerUrl: string = `${environment.apiUrl}/auth`;
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  //özelliklerde (user) behaviorSubject

  login(userForLoginModel: UserForLogin): Observable<UserLoginResponse> {
    //# EventEmitter: child componentten parent'e event göndermek için kullanılır.

    //# Subject
    const subject = new Subject<UserLoginResponse>();
    // subject ile subscribe olunduktan sonra eventleri yakalabilirsiniz.

    //# BehaviorSubject
    // const behaviorSubject = new BehaviorSubject<UserLoginResponse>({
    //   success: false,
    //   access_token: '',
    // });
    // behaviorSubject başlangıç değeri alır.
    // behaviorSubject subscribe o anki veriyi size verir. Yine sonraki eventleri ve verileri de yakalayabiliyoruz.

    this.httpClient
      .post<UserLoginResponse>(
        this.apiControllerUrl + '/login',
        userForLoginModel
      )
      .subscribe(response => {
        if (!response.success) return;
        this.saveToken(response);
        subject.next(response); // bu noktada haberdar olmak istiyorum. O anki değere ihtiyacım yok, bu yüzden Subject daha uygundur.
      });

    return subject.asObservable();
  }

  saveToken(userLoginResponse: UserLoginResponse) {
    this.localStorageService.set('token', userLoginResponse.access_token);
  }
}