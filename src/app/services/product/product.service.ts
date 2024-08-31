import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemProductResponse } from '../../models/responses/product/item-product-response';
import { ResponseApi } from '../../helpers/resposne-apis/response-api';
import { map, Observable } from 'rxjs';
import { DetailsProductResponse } from 'src/app/models/responses/product/details-product-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_BASE_URL = 'http://localhost:5281/api';
  private apiUrl: string = this.API_BASE_URL + "/customer/product/";
  
  constructor(
    private http: HttpClient,
  ) { }

  // getSellingProductByMonth
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

  // GetNewProducts
  getNewProducts(): Observable<ResponseApi<ItemProductResponse[]>> {
    return this.http
      .get<ResponseApi<ItemProductResponse[]>>(this.apiUrl + "GetNewProducts")
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

  // GetNewProducts
  getSaleProducts(): Observable<ResponseApi<ItemProductResponse[]>> {
    return this.http
      .get<ResponseApi<ItemProductResponse[]>>(this.apiUrl + "GetSaleProducts")
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

  // GetNewProducts
  getProductDetails(productId: string): Observable<ResponseApi<DetailsProductResponse>> {
    const params = new HttpParams().set("productId", productId);
    
    return this.http
      .get<ResponseApi<DetailsProductResponse>>(this.apiUrl + "GetProductDetails", { params })
      .pipe(
        map((response: ResponseApi<DetailsProductResponse>) => {
          if (response.isSuccessed) {
            return response;
          } else {
            throw new Error('Login failed: ');
          }
        })
      );
  }
}
