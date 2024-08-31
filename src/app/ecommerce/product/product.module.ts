import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule, routedComponents } from './product-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
  ]
})
export class ProductModule { }
