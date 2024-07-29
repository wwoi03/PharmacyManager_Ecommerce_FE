import { Component, Input, SimpleChanges } from '@angular/core';
import { UtilMoney } from 'src/app/helpers/utils/util-money';
import { UtilTime } from 'src/app/helpers/utils/util-time';
import { ItemOrderResponse } from 'src/app/models/responses/order/item-order-response';
import { FileService } from 'src/app/services/file/file.service';

@Component({
  selector: 'ngx-order-being-delivered',
  templateUrl: './order-being-delivered.component.html',
  styleUrls: ['./order-being-delivered.component.scss'],
})
export class OrderBeingDeliveredComponent {
  // Input()
  @Input() itemOrdersResponse: ItemOrderResponse[] = [];

  // constructor
  constructor(
    public utilTime: UtilTime,
    public utilMoney: UtilMoney,
    public fileService: FileService
  ) {}
}
