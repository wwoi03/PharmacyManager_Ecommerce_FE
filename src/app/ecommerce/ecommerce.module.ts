import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { EcommerceComponent } from './ecommerce.component';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
  declarations: [
    EcommerceComponent,
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    ThemeModule,
  ]
})
export class EcommerceModule { }
