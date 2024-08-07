import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../services/auth/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: EcommerceComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'home-index',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then((m) => m.AccountModule),
      },
      {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'checkout',
        loadChildren: () => import('./checkout/checkout.module').then((m) => m.CheckoutModule),
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
      },
      
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then((m) => m.OrderModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then((m) => m.SearchModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcommerceRoutingModule {}
