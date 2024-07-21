import { Component } from '@angular/core';
import { UpdateCartRequest } from 'src/app/models/requests/cart/update-cart-request';
import { ItemCartResponse } from 'src/app/models/responses/cart/item-cart-response';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'ngx-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent {
  // variables
  itemCartResponses: ItemCartResponse[] = [];

  // constructor
  constructor(private cartService: CartService) {}

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
}
