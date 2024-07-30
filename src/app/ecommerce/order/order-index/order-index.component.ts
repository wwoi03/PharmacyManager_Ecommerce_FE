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
  quantityWaiting: number = 0;
  quantityBeingDelivered: number = 0;

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
          this.quantityWaiting = this.updateQuantity("OrderWaitingConfirmation");
          this.quantityBeingDelivered = this.updateQuantity("OrderBeingDelivered");
        }
      }
    )
  }

  // số lượng hiển thị của các đơn hàng
  updateQuantity(statusStr: string): number {
    return this.itemOrdersResponse
      .filter(item => item.status === statusStr)
      .reduce((sum, item) => sum + 1, 0);
  }
}
