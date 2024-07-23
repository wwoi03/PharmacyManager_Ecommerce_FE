import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule, routedComponents } from './checkout-routing.module';

@NgModule({
  declarations: [
    ...routedComponents,

  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
