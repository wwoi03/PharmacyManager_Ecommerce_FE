import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilMoney } from 'src/app/helpers/utils/util-money';
import { CreateCartRequest } from 'src/app/models/requests/cart/create-cart-request';
import { DetailsProductResponse } from 'src/app/models/responses/product/details-product-response';
import { ShipmentDetailsUnitResponse } from 'src/app/models/responses/shipment-details-unit/shipment-details-unit-response';
import { CartService } from 'src/app/services/cart/cart.service';
import { FileService } from 'src/app/services/file/file.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { ProductService } from 'src/app/services/product/product.service';
import { SweetAlertService } from 'src/app/services/sweet-alert/sweet-alert.service';

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
  createCartRequest: CreateCartRequest = new CreateCartRequest();

  // constructor
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private fileService: FileService,
    private utilMoney: UtilMoney,
    private cartService: CartService,
    private sweetAlertService: SweetAlertService,
    private loadingService: LoadingService,
    private localStorageService: LocalStorageService,
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

  // xử lý bấm mua
  onClickBuy() {
    this.loadingService.show();

    this.createCartRequest.productId = this.detailsProductResponse.id;
    this.createCartRequest.quantity = this.quantity;
    this.createCartRequest.unitId = this.unitPrice?.unitId;
    
    this.cartService.create(this.createCartRequest).subscribe(
      (res) => {
        if (res.code === 200) {
          setTimeout(() => {
            var cartQuantity = this.localStorageService.getCartQuantity();
            this.localStorageService.setCartQuantity(cartQuantity++);

            this.loadingService.hide();
            this.sweetAlertService.successNoButton("Thêm sản phẩm vào giỏ hàng thành công.");
          }, 500);
        }
      }
    )
  }
}
