import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiControllerUrl: string = `${environment.apiUrl}/customers`;

  constructor(private httpClient:HttpClient) { }

  getList(): Observable<Customer[]> {
    // subscribe yapmalıyım çünkü gelen cevabı beklemeliyim asenkron çalıştığı için
    return this.httpClient.get<Customer[]>(`${this.apiControllerUrl}`);
  }

  add(customer:Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.apiControllerUrl, customer)
  }
}
