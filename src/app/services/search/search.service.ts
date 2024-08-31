import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResponseApi } from 'src/app/helpers/resposne-apis/response-api';
import { SearchProductRequest } from 'src/app/models/requests/search/search-product-request';
import { ItemProductResponse } from 'src/app/models/responses/product/item-product-response';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private API_BASE_URL = 'http://localhost:5281/api';
  private apiUrl: string = this.API_BASE_URL + "/customer/search/";
  
  constructor(
    private http: HttpClient,
  ) { }

  // getSellingProductByMonth
  searchProduct(request: SearchProductRequest): Observable<ResponseApi<ItemProductResponse[]>> {
    return this.http
      .post<ResponseApi<ItemProductResponse[]>>(this.apiUrl + "SearchProduct", request)
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
