import { Component } from '@angular/core';
import { ItemOrderResponse } from 'src/app/models/responses/order/item-order-response';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'ngx-order-index',
  templateUrl: './order-index.component.html',
  styleUrls: ['./order-index.component.scss']
})
export class OrderIndexComponent {
  // variables
  itemOrdersResponse: ItemOrderResponse[] = [];

  // constructor
  constructor(
    private orderService: OrderService
  ) {

  }

  // InitData
  ngOnInit() {
    this.loadMyOrder();
  }

  // Load my order
  loadMyOrder() {
    this.orderService.getMyOrders().subscribe(
      (res) => {
        if (res.code === 200) {
          this.itemOrdersResponse = res.obj ?? [];
          console.log("Parent: ");
          console.log(this.itemOrdersResponse);
        }
      }
    )
  }
}
