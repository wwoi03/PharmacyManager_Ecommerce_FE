import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseApi } from 'src/app/helpers/resposne-apis/response-api';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private apiUrl: string = "http://localhost:5281" + "/admin/upload/";
  private apiUrlPhoto: string = "http://localhost:5281" + "/Photos/";

  constructor(private http: HttpClient) {}

  // // save file
  // saveFile(file: File): Observable<ResponseApi<string>> {
  //   let formData = new FormData();
  //   formData.append("file", file, file.name);

  //   return this.http
  //     .post<ResponseApi<string>>(this.apiUrl + "SaveFile", formData)
  //     .pipe(
  //       tap((response: ResponseApi<string>) => {
  //         if (response.isSuccessed) {
  //           return response;
  //         } else {
  //           this.errorNotify.handleStatusError(response.code);
  //         }
  //       }),
  //       catchError((error: HttpErrorResponse) => {
  //         return this.errorNotify.handleStatusError(error.status);
  //       })
  //     );
  // }

  // Load Image
  loadImage(fileName: string) {
    return this.apiUrlPhoto + fileName;
  }
}
