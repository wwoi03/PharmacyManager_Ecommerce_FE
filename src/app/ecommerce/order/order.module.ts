import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule, routedComponents } from './order-routing.module';
import { ThemeModule } from 'src/app/theme/theme.module';

@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ThemeModule,
  ]
})
export class OrderModule { }
