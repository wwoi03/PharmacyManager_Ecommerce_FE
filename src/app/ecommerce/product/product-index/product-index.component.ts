import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilMoney } from 'src/app/helpers/utils/util-money';
import { DetailsProductResponse } from 'src/app/models/responses/product/details-product-response';
import { ShipmentDetailsUnitResponse } from 'src/app/models/responses/shipment-details-unit/shipment-details-unit-response';
import { FileService } from 'src/app/services/file/file.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'ngx-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.scss']
})
export class ProductIndexComponent implements OnInit {
  // variables
  productId: string | undefined;
  detailsProductResponse: DetailsProductResponse = new DetailsProductResponse();
  unitPrice: ShipmentDetailsUnitResponse | undefined;
  quantity: number = 1;

  // constructor
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private fileService: FileService,
    private utilMoney: UtilMoney,
  ) {

  }

  // Init Data
  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.productId = params.get('id') || '';

      this.loadProduct();
    });
  }

  // get image
  getImage(imageName: string) {
    return this.fileService.loadImage(imageName);
  }

  // get price
  getPrice(price: number) {
    return this.utilMoney.formatCurrency(price);
  }

  // Load product
  loadProduct() {
    this.productService.getProductDetails(this.productId ?? "").subscribe(
      (res) => {
        if (res.code === 200) {
          this.detailsProductResponse = res.obj as DetailsProductResponse;
          this.unitPrice = this.detailsProductResponse.shipmentDetailsUnits.find(item => item.level === 1);
        }
      }
    )
  }

  // onClickUnit
  onClickUnit(unit: ShipmentDetailsUnitResponse) {
    this.unitPrice = unit;
  }

  // Xử lý khi nhấn nút giảm
  onClickReduce() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  // Xử lý khi nhấn nút tăng
  onClickIncrease() {
    this.quantity++;
  }
}
