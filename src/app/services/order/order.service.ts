import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResponseApi } from 'src/app/helpers/resposne-apis/response-api';
import { CreateOrderCommandRequest } from 'src/app/models/requests/order/create-order-request';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private API_BASE_URL = 'http://localhost:5281/api';
  private apiUrl: string = this.API_BASE_URL + "/customer/order/";
  
  constructor(
    private http: HttpClient,
  ) { }

  // create
  create(request: CreateOrderCommandRequest): Observable<ResponseApi<string>> {
    return this.http
      .post<ResponseApi<string>>(this.apiUrl + "Create", request)
      .pipe(
        map((response: ResponseApi<string>) => {
          if (response.isSuccessed) {
            return response;
          } else {
            throw new Error('Login failed: ');
          }
        })
      );
  }
}
