import { Component, Input } from '@angular/core';
import { UtilMoney } from 'src/app/helpers/utils/util-money';
import { UtilTime } from 'src/app/helpers/utils/util-time';
import { ItemOrderResponse } from 'src/app/models/responses/order/item-order-response';
import { FileService } from 'src/app/services/file/file.service';

@Component({
  selector: 'ngx-order-cancel',
  templateUrl: './order-cancel.component.html',
  styleUrls: ['./order-cancel.component.scss'],
})
export class OrderCancelComponent {
  // Input()
  @Input() itemOrdersResponse: ItemOrderResponse[] = [];

  // constructor
  constructor(
    public utilTime: UtilTime,
    public utilMoney: UtilMoney,
    public fileService: FileService
  ) {}
}
