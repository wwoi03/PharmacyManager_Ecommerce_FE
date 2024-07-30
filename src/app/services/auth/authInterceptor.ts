import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();

    // Kiểm tra nếu URL của request là URL không cần token
    const excludedUrl = 'https://esgoo.net/api-tinhthanh';

    if (req.url.includes(excludedUrl)) {
      // Không thêm token vào request
      return next.handle(req);
    } else if (token) {
      // Thêm token vào headers
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
      return next.handle(cloned);
    } else {
      // Không có token và URL không nằm trong danh sách loại trừ
      return next.handle(req);
    }
  }
}
