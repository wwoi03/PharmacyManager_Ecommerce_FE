import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule, routedComponents } from './cart-routing.module';

@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})

export class CartModule { }
