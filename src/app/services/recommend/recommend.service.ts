import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResponseApi } from 'src/app/helpers/resposne-apis/response-api';
import { ItemProductResponse } from 'src/app/models/responses/product/item-product-response';

@Injectable({
  providedIn: 'root'
})
export class RecommendService {
  private API_BASE_URL = 'http://localhost:5281/api';
  private apiUrl: string = this.API_BASE_URL + "/customer/recommend/";
  
  constructor(
    private http: HttpClient,
  ) { }

  // getSellingProductByMonth
  getSimilarProducts(): Observable<ResponseApi<ItemProductResponse[]>> {
    return this.http
      .get<ResponseApi<ItemProductResponse[]>>(this.apiUrl + "GetSimilarProducts")
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
