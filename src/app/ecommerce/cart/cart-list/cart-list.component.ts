import { Component } from '@angular/core';
import { ItemCartResponse } from 'src/app/models/responses/cart/item-cart-response';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'ngx-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  // variables
  itemCartResponses: ItemCartResponse[] = [];
  
  // constructor
  constructor(
    private cartService: CartService,
  ) { 

  }

  // InitData
  ngOnInit() {
    this.loadCart();
  }

  // load cart
  loadCart() {
    this.cartService.getCart().subscribe(
      (res) => {
        this.itemCartResponses = res.obj ?? [];
      }
    );
  }
}
