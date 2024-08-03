import { Component } from '@angular/core';
import { ItemProductResponse } from '../../../models/responses/product/item-product-response';
import { ProductService } from '../../../services/product/product.service';
import { FileService } from 'src/app/services/file/file.service';
import { UtilMoney } from 'src/app/helpers/utils/util-money';
import { CartService } from 'src/app/services/cart/cart.service';
import { CreateCartRequest } from 'src/app/models/requests/cart/create-cart-request';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'ngx-selling-product',
  templateUrl: './selling-product.component.html',
  styleUrls: ['./selling-product.component.scss'],
})
export class SellingProductComponent {
  // variables
  itemProductResponses: ItemProductResponse[] = [];

  // constructor
  constructor(
    private productService: ProductService,
    public fileService: FileService,
    public utilMoney: UtilMoney,
    private cartService: CartService,
    private localStorageService: LocalStorageService
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
  onClickBuy(item: ItemProductResponse) {
    if (item.unitId === null || item.unitId === undefined) {
      item.unitId = item.shipmentDetailsUnits.find(
        (i) => i.level === 1
      )?.unitId;
    }

    const cart = new CreateCartRequest();
    cart.productId = item.productId;
    cart.unitId = item.unitId;
    cart.quantity = 1;

    this.cartService.create(cart).subscribe((res) => {
      if (res.code === 200) {
        var cartQuantity =  this.localStorageService.getCartQuantity();
        this.localStorageService.setCartQuantity(cartQuantity);
      }
    });
  }

  onUnitChange(item: ItemProductResponse, unitId: string) {
    item.unitId = unitId;
  }
}
