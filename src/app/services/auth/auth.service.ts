import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_NAME = 'jwt_token';
  private readonly ROLES = 'roles';
  private readonly NAME = 'name';

  constructor(private cookieService: CookieService) {}

  setToken(token: string): void {
    this.cookieService.set(this.TOKEN_NAME, token, 0, '/ecommerce', undefined, true, 'Strict');
  }

  getToken(): string {
    return this.cookieService.get(this.TOKEN_NAME);
  }

  deleteToken(): void {
    this.cookieService.delete(this.TOKEN_NAME, '/ecommerce');
  }

  setRoles(roles: string[]): void {
    this.cookieService.set(this.ROLES, JSON.stringify(roles), 0, '/ecommerce', undefined, true, 'Strict');
  }

  getRoles(): string[] {
    const roles = this.cookieService.get(this.ROLES);
    return roles ? JSON.parse(roles) : [];
  }

  setName(name: string): void {
    this.cookieService.set(this.NAME, name, 0, '/ecommerce', undefined, true, 'Strict');
  }

  getName(): string {
    return this.cookieService.get(this.NAME);
  }

  logout(): void {
    localStorage.clear();
    this.cookieService.delete(this.TOKEN_NAME, '/ecommerce');
    this.cookieService.delete(this.ROLES, '/ecommerce');
    this.cookieService.delete(this.NAME, '/ecommerce');
  }
}
