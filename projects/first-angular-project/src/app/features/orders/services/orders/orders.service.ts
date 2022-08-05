import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/features/orders/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  apiControllerUrl:string = `${environment.apiUrl}/orders`;

  constructor(private httpClient:HttpClient) { } //http client'ı injecte etmeliyiz

  getList(): Observable<Order[]> {
    // subscribe yapmalıyım çünkü gelen cevabı beklemeliyim asenkron çalıştığı için
    return this.httpClient.get<Order[]>(`${this.apiControllerUrl}`);
  }

  getById(id:number): Observable<Order> {
    return this.httpClient.get<Order>(`${this.apiControllerUrl}/${id}`)
  }

  add(Order:Order): Observable<Order>{
    return this.httpClient.post<Order>(this.apiControllerUrl,Order);
  }

  delete(id:number):Observable<Order>{
    return this.httpClient.delete<Order>(`${this.apiControllerUrl}/${id}`)
  }

  update(Order:Order):Observable<Order>{
    return this.httpClient.put<Order>(`${this.apiControllerUrl}/${Order.id}`,Order)
  }
}
