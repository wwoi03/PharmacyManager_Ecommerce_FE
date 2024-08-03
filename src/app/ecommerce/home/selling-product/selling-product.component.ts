import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemProductResponse } from '../../../models/responses/product/item-product-response';
import { ProductService } from '../../../services/product/product.service';
import { FileService } from 'src/app/services/file/file.service';
import { UtilMoney } from 'src/app/helpers/utils/util-money';
import { ShipmentDetailsUnitResponse } from 'src/app/models/responses/shipment-details-unit/shipment-details-unit-response';

@Component({
  selector: 'ngx-selling-product',
  templateUrl: './selling-product.component.html',
  styleUrls: ['./selling-product.component.scss'],
})
export class SellingProductComponent {
  itemProductResponses: ItemProductResponse[] = [];

  constructor(
    private productService: ProductService,
    public fileService: FileService,
    public utilMoney: UtilMoney,
  ) {}

  ngOnInit() {
    this.loadItemProduct();
  }

  loadItemProduct() {
    this.productService.getSellingProductByMonth().subscribe((res) => {
      if (res.code === 200) {
        this.itemProductResponses = res.obj as ItemProductResponse[];

        console.log(this.itemProductResponses);
      }
    });
  }

  loadProductPrice(shipmentDetailsUnit: ShipmentDetailsUnitResponse[]) {
    console.log(shipmentDetailsUnit[0]);
  }

  onClickBuy(item: ItemProductResponse) {
    
  }
}
