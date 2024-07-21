import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { CartIndexComponent } from './cart-index/cart-index.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    children: [
      {
        path: 'cart-index',
        component: CartIndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }

export const routedComponents = [
  CartComponent, 
  CartIndexComponent,
  CartListComponent,
  CartSummaryComponent
]