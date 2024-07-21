import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ResponseApi } from 'src/app/helpers/resposne-apis/response-api';
import { ItemCartResponse } from 'src/app/models/responses/cart/item-cart-response';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private API_BASE_URL = 'http://localhost:5281/api';
  private apiUrl: string = this.API_BASE_URL + "/customer/cart/";
  
  constructor(
    private http: HttpClient,
  ) { }

  // Sign In
  getCart(): Observable<ResponseApi<ItemCartResponse[]>> {
    return this.http
      .get<ResponseApi<ItemCartResponse[]>>(this.apiUrl + "GetCart")
      .pipe(
        map((response: ResponseApi<ItemCartResponse[]>) => {
          if (response.isSuccessed) {
            return response;
          } else {
            throw new Error('Login failed: ');
          }
        })
      );
  }
}
