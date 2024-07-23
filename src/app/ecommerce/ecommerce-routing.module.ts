import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';
import { HomeComponent } from './home/home.component';

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
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'account',
        loadChildren: () => import('./account/account.module').then((m) => m.AccountModule),
      },
      {
<<<<<<< HEAD
        path: 'product',
        loadChildren: () => import('./product/product.module').then((m) => m.ProductModule),
=======
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
>>>>>>> origin/master
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcommerceRoutingModule {}
