import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiControllerUrl:string = `${environment.apiUrl}/products`;

  constructor(private httpClient:HttpClient) { } //http client'ı injecte etmeliyiz

  getList(): Observable<Product[]> {
    // subscribe yapmalıyım çünkü gelen cevabı beklemeliyim asenkron çalıştığı için
    return this.httpClient.get<Product[]>(`${this.apiControllerUrl}`);
  }

  getById(id:number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiControllerUrl}/${id}}`)
  }
}
