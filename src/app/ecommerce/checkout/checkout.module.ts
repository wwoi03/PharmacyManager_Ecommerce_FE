import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule, routedComponents } from './checkout-routing.module';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ...routedComponents,

  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,

    NgSelectModule, 
    NgOptionHighlightModule, 
    FormsModule,
  ]
})
export class CheckoutModule { }
