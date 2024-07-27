import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order.component';
import { OrderIndexComponent } from './order-index/order-index.component';
import { OrderAllComponent } from './order-all/order-all.component';

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
];
