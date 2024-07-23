import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemProductResponse } from '../../models/responses/product/item-product-response';
import { ResponseApi } from '../../helpers/resposne-apis/response-api';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_BASE_URL = 'http://localhost:5281/api';
  private apiUrl: string = this.API_BASE_URL + "/customer/product/";
  
  constructor(
    private http: HttpClient,
  ) { }

  // Sign In
  getSellingProductByMonth(): Observable<ResponseApi<ItemProductResponse[]>> {
    return this.http
      .get<ResponseApi<ItemProductResponse[]>>(this.apiUrl + "GetSellingProductByMonth")
      .pipe(
        map((response: ResponseApi<ItemProductResponse[]>) => {
          if (response.isSuccessed) {
            return response;
          } else {
            throw new Error('Login failed: ');
          }
        })
      );
  }
}
