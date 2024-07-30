import { Component, Input } from '@angular/core';
import { UtilMoney } from 'src/app/helpers/utils/util-money';
import { UtilTime } from 'src/app/helpers/utils/util-time';
import { ItemOrderResponse } from 'src/app/models/responses/order/item-order-response';
import { FileService } from 'src/app/services/file/file.service';

@Component({
  selector: 'ngx-order-all',
  templateUrl: './order-all.component.html',
  styleUrls: ['./order-all.component.scss'],
})
export class OrderAllComponent {
  // Input()
  @Input() itemOrdersResponse: ItemOrderResponse[] = [];

  // constructor
  constructor(
    public utilTime: UtilTime,
    public utilMoney: UtilMoney,
    public fileService: FileService
  ) {}

  ngOnInit() {
    console.log('child: ');
    console.log(this.itemOrdersResponse);
  }

  getStatus(statusType: string): string {
    switch (statusType) {
      case 'OrderWaitingConfirmation':
        return 'Đang xử lý';
      case 'OrderBeingPrepared':
        return 'Đang giao';
      case 'OrderBeingDelivered':
        return 'Đang giao';
      case 'OrderDelivered':
        return 'Đã giao';
      case 'RequestCancelOrder':
        return 'Đã hủy';
      case 'CancellationOrderApproved':
        return 'Đã hủy';
      case 'StoreCanceledOrder':
        return 'Đã hủy';
      default:
        return '';
    }
  }
}
