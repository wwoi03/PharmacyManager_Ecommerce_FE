import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilTime } from 'src/app/helpers/utils/util-time';
import { UpdateCartRequest } from 'src/app/models/requests/cart/update-cart-request';
import { ItemCartResponse } from 'src/app/models/responses/cart/item-cart-response';
import { CartService } from 'src/app/services/cart/cart.service';
import { FileService } from 'src/app/services/file/file.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'ngx-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  // variables
  itemCartResponses: ItemCartResponse[] = [];
  cartCheckOut: ItemCartResponse[] = [];
  subTotal: number = 0;
  total: number = 0;
  discountVoucher: number = 0;
  discountDirect: number = 0;

  // constructor
  constructor(
    private cartService: CartService,
    public fileService: FileService,
    public utilTime: UtilTime,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  // InitData
  ngOnInit() {
    this.loadCart();
  }

  // load cart
  loadCart() {
    this.loadingService.show();

    this.cartService.getCart().subscribe((res) => {
      setTimeout(() => {
        this.itemCartResponses = res.obj ?? [];

        this.loadingService.hide();
      }, 1000);
    });
  }

  // Load price
  loadPrice(item: ItemCartResponse): number {
    const matchedUnit = item.shipmentDetailsUnits.find(
      (unit) => unit.unitId === item.unitId
    );
    return matchedUnit ? matchedUnit.salePrice : 0;
  }

  onChangeQuantity(event: any, item: ItemCartResponse) {
    const inputElement = event.target as HTMLInputElement;
    item.quantity = parseInt(inputElement.value, 10);

    if (item.quantity < 1) {
      item.quantity = 1;
    }

    this.updateCart(item);
  }

  // Xử lý khi nhấn nút giảm
  onClickReduce(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateCart(item);
    }
  }

  // Xử lý khi nhấn nút tăng
  onClickIncrease(item: any) {
    item.quantity++;
    this.updateCart(item);
  }

  updateCart(item: ItemCartResponse) {
    this.loadingService.show();

    var updateCart: UpdateCartRequest = {
      cartId: item.cartId,
      quantity: item.quantity,
    };

    this.cartService.update(updateCart).subscribe((res) => {
      if (res.code === 200) {
        setTimeout(() => {
          this.calcTotal();

          this.loadingService.hide();
        }, 500);
      }
    });
  }

  // Delete Cart
  onClickDeleteCart(item: ItemCartResponse) {
    this.cartService.delete(item.cartId).subscribe((res) => {
      if (res.code === 200) {
        setTimeout(() => {
          this.loadCart();

          this.loadingService.hide();
        }, 500);
      }
    });
  }

  // Checkout
  onClickCheckout() {
    this.cartService.cartCheckout = this.cartCheckOut;
    localStorage.setItem('cartCheckout', JSON.stringify(this.cartService.cartCheckout));
    this.router.navigate(['/ecommerce/checkout']);
  }

  // chọn sản phẩm
  onChangeCheckbox(event: any, item: ItemCartResponse) {
    const checkbox = event.target as HTMLInputElement;

    if (checkbox.checked) {
      this.cartCheckOut.push(item);
    } else {
      // Xóa item khỏi cartCheckout
      const index = this.cartCheckOut.findIndex(
        (cartItem) => cartItem.cartId === item.cartId
      );
      if (index !== -1) {
        this.cartCheckOut.splice(index, 1);
      }
    }

    this.calcTotal();
  }

  // Tính tồng tiền thanh toán
  calcTotal() {
    this.total = 0;
    this.calcSubTotal();
    this.total += this.discountVoucher + this.discountDirect;
  }

  // Tính SubTotal
  calcSubTotal() {
    this.cartCheckOut.forEach((item) => {
      this.total += item.quantity * this.loadPrice(item);
    });

    this.subTotal = this.total;
  }
}
