import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../../models/Category';

@Injectable()
export class CategoriesService {
  apiControllerUrl:string = `${environment.apiUrl}/categories`;
  constructor(private httpClient:HttpClient) { }

  getList():Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.apiControllerUrl);
  }
}
