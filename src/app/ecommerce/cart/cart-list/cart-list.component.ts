import { Component } from '@angular/core';
import { UtilTime } from 'src/app/helpers/utils/util-time';
import { UpdateCartRequest } from 'src/app/models/requests/cart/update-cart-request';
import { ItemCartResponse } from 'src/app/models/responses/cart/item-cart-response';
import { CartService } from 'src/app/services/cart/cart.service';
import { FileService } from 'src/app/services/file/file.service';

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

  // constructor
  constructor(
    private cartService: CartService,
    public fileService: FileService,
    public utilTime: UtilTime
  ) {}

  // InitData
  ngOnInit() {
    this.loadCart();
  }

  // load cart
  loadCart() {
    this.cartService.getCart().subscribe((res) => {
      this.itemCartResponses = res.obj ?? [];
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
    var updateCart: UpdateCartRequest = {
      cartId: item.cartId,
      quantity: item.quantity,
    };

    this.cartService.update(updateCart).subscribe((res) => {
      if (res.code === 200) {
        this.calcTotal();
      }
    });
  }

  // Delete Cart
  onClickDeleteCart(item: ItemCartResponse) {
    this.cartService.delete(item.cartId).subscribe((res) => {
      if (res.code === 200) {
        this.loadCart();
      }
    });
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
    console.log(this.cartCheckOut);

    this.calcTotal();
  }

  // Tính tồng tiền thanh toán
  calcTotal() {
    this.total = 0;
    this.calcSubTotal();
    this.total += this.discountVoucher;
  }

  // Tính SubTotal
  calcSubTotal() {
    this.cartCheckOut.forEach((item) => {
      this.total += (item.quantity * this.loadPrice(item));
    });

    this.subTotal = this.total;
  }
}
