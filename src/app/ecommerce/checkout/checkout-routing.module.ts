import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { CheckoutIndexComponent } from './checkout-index/checkout-index.component';
import { CheckoutNewAddressComponent } from './checkout-new-address/checkout-new-address.component';
import { CheckoutInfoReceiveComponent } from './checkout-info-receive/checkout-info-receive.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: [
      {
        path: 'checkout-index',
        component: CheckoutIndexComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {}

export const routedComponents = [
  CheckoutComponent,
  CheckoutIndexComponent,
  CheckoutNewAddressComponent,
  CheckoutInfoReceiveComponent,
];
