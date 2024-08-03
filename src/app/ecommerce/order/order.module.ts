import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule, routedComponents } from './order-routing.module';
import { ThemeModule } from 'src/app/theme/theme.module';
import { OrderCancelComponent } from './order-cancel/order-cancel.component';

@NgModule({
  declarations: [
    ...routedComponents,
    OrderCancelComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ThemeModule,
  ]
})
export class OrderModule { }
