import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResponseApi } from 'src/app/helpers/resposne-apis/response-api';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient,
  ) { }

  // PaymentCallback
  paymentCallback(paymentUrl: string): Observable<ResponseApi<any>> {
    return this.http
      .get<ResponseApi<any>>(paymentUrl)
      .pipe(
        map((response: ResponseApi<any>) => {
          if (response.isSuccessed) {
            return response;
          } else {
            throw new Error('Login failed: ');
          }
        })
      );
  }
}
