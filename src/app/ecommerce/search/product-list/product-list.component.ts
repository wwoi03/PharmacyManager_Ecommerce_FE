import { Component, EventEmitter, Output } from '@angular/core';
import { UtilMoney } from 'src/app/helpers/utils/util-money';
import { ItemProductResponse } from 'src/app/models/responses/product/item-product-response';
import { FileService } from 'src/app/services/file/file.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'ngx-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
// variables
itemProductResponses: ItemProductResponse[] = [];
@Output() childOnClickBuy = new EventEmitter<ItemProductResponse>();
@Output() childOnClickDetails = new EventEmitter<ItemProductResponse>();

// constructor
constructor(
  private productService: ProductService,
  public fileService: FileService,
  public utilMoney: UtilMoney
) {}

// InitData
ngOnInit() {
  this.loadItemProduct();
}

// Load Item Product
loadItemProduct() {
  this.productService.getSellingProductByMonth().subscribe((res) => {
    if (res.code === 200) {
      this.itemProductResponses = res.obj as ItemProductResponse[];
    }
  });
}

// Xử lý khi bấm nút mua
triggerParentOnClickBuy(item: ItemProductResponse) {
  this.childOnClickBuy.emit(item);
}

// Xử lý khi chi tiết
triggerParentOnClickDetails(item: ItemProductResponse) {
  this.childOnClickDetails.emit(item);
}
// Xử lý khi chọn đơn vị sản phẩm
onUnitChange(item: ItemProductResponse, unitId: string) {
  item.unitId = unitId;
}
}
