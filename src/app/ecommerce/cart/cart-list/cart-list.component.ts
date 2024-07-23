import { Component } from '@angular/core';
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
  cartCheckOut: any[] = [];
  subTotal: number = 0;
  total: number = 0;

  // constructor
  constructor(private cartService: CartService, public fileService: FileService) {}

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

  
  onChangeQuantity(event: any, item: ItemCartResponse) {
    const inputElement = event.target as HTMLInputElement;
    item.quantity = parseInt(inputElement.value, 10);
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
      quantity: item.quantity
    };

    console.log(updateCart);
    this.cartService.update(updateCart).subscribe();
  }

  // Delete Cart
  onClickDeleteCart(item: ItemCartResponse) {
    this.cartService.delete(item.cartId).subscribe(
      (res) => {
        if (res.code === 200) {
          this.loadCart();
        }
      }
    )
  }

  // chọn sản phẩm
  onChangeCheckbox(event: any, item: ItemCartResponse) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.subTotal += (item.quantity * 150000);
    } else {
      this.subTotal -= (item.quantity * 150000);
    }

    this.calcTotal();
  }

  calcTotal() {
    this.total = this.subTotal;
  }

  formatCurrency(amount: number): string {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }
}
