import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiControllerUrl:string = `${environment.apiUrl}/products`;
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiControllerUrl);
  }
}
