import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/features/categories/models/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiControllerUrl:string = `${environment.apiUrl}/categories`;

  constructor(private httpClient:HttpClient) { } //http client'ı injecte etmeliyiz

  getList(): Observable<Category[]> {
    // subscribe yapmalıyım çünkü gelen cevabı beklemeliyim asenkron çalıştığı için
    return this.httpClient.get<Category[]>(`${this.apiControllerUrl}`);
  }
}
