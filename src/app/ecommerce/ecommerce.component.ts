import { Component } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  template: `
    <ngx-header></ngx-header>
    <ngx-navbar></ngx-navbar>
    <router-outlet></router-outlet>
    <ngx-footer></ngx-footer>
  `,
})
export class EcommerceComponent {}
