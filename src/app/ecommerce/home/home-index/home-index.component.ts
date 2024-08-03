import { Component } from '@angular/core';
import { UtilMoney } from 'src/app/helpers/utils/util-money';
import { CreateCartRequest } from 'src/app/models/requests/cart/create-cart-request';
import { ItemProductResponse } from 'src/app/models/responses/product/item-product-response';
import { CartService } from 'src/app/services/cart/cart.service';
import { FileService } from 'src/app/services/file/file.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'ngx-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss']
})
export class HomeIndexComponent {
  // variables

  // constructor
  constructor(
    private productService: ProductService,
    public fileService: FileService,
    public utilMoney: UtilMoney,
    private cartService: CartService,
    private localStorageService: LocalStorageService
  ) {

  }

  // Xử lý sự kiện
  handleChildOnClickBuy(item: ItemProductResponse) {
    if (item.unitId === null || item.unitId === undefined) {
      item.unitId = item.shipmentDetailsUnits.find(i => i.level === 1)?.unitId;
    }

    const cart = new CreateCartRequest();
    cart.productId = item.productId;
    cart.unitId = item.unitId;
    cart.quantity = 1;

    this.cartService.create(cart).subscribe((res) => {
      if (res.code === 200) {
        var cartQuantity = this.localStorageService.getCartQuantity();
        this.localStorageService.setCartQuantity(cartQuantity);
      }
    });
  }
}
