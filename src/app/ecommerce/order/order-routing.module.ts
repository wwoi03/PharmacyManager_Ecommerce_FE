import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order.component';
import { OrderIndexComponent } from './order-index/order-index.component';
import { OrderAllComponent } from './order-all/order-all.component';
import { OrderWaitingComponent } from './order-waiting/order-waiting.component';
import { OrderBeingDeliveredComponent } from './order-being-delivered/order-being-delivered.component';
import { OrderDeliveredComponent } from './order-delivered/order-delivered.component';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      {
        path: 'order-index',
        component: OrderIndexComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}

export const routedComponents = [
  OrderComponent,
  OrderIndexComponent,
  OrderAllComponent,
  OrderWaitingComponent,
  OrderBeingDeliveredComponent,
  OrderDeliveredComponent,
];
