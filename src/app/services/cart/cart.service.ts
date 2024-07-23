import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ResponseApi } from 'src/app/helpers/resposne-apis/response-api';
import { UpdateCartRequest } from 'src/app/models/requests/cart/update-cart-request';
import { ItemCartResponse } from 'src/app/models/responses/cart/item-cart-response';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private API_BASE_URL = 'http://localhost:5281/api';
  private apiUrl: string = this.API_BASE_URL + "/customer/cart/";
  public cartCheckout: ItemCartResponse[] = [];
  
  constructor(
    private http: HttpClient,
  ) { }

  // get Cart
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

  // Update Quantity
  update(request: UpdateCartRequest): Observable<ResponseApi<string>> {
    return this.http
      .put<ResponseApi<string>>(this.apiUrl + "Update", request)
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

  // Update Quantity
  delete(cartId: string): Observable<ResponseApi<string>> {
    const params = new HttpParams().set("cartId", cartId);

    return this.http
      .delete<ResponseApi<string>>(this.apiUrl + "Delete", { params })
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
