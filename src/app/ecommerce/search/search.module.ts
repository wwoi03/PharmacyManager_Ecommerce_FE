import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routedComponents, SearchRoutingModule } from './search-routing.module';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    ...routedComponents,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }