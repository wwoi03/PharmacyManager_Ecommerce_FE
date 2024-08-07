import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignInRequest } from '../../models/requests/account/sign-in-request';
import { map, Observable, tap } from 'rxjs';
import { ResponseApi } from '../../helpers/resposne-apis/response-api';
import { SignUpRequest } from 'src/app/models/requests/account/sign-up-request';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private API_BASE_URL = 'http://localhost:5281/api';
  private apiUrl: string = this.API_BASE_URL + "/customer/account/";
  
  constructor(
    private http: HttpClient,
  ) { }

  // Sign In
  signIn(request: SignInRequest): Observable<ResponseApi<any>> {
    return this.http
      .put<ResponseApi<any>>(this.apiUrl + "SignIn", request)
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

  // Sign Up
  signUp(request: SignUpRequest): Observable<ResponseApi<any>> {
    return this.http
      .put<ResponseApi<any>>(this.apiUrl + "SignUp", request)
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
