import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilTime } from 'src/app/helpers/utils/util-time';
import { CreateOrderCommandRequest } from 'src/app/models/requests/order/create-order-request';
import { ItemCartResponse } from 'src/app/models/responses/cart/item-cart-response';
import { CartService } from 'src/app/services/cart/cart.service';
import { FileService } from 'src/app/services/file/file.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { OrderService } from 'src/app/services/order/order.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { SweetAlertService } from 'src/app/services/sweet-alert/sweet-alert.service';

@Component({
  selector: 'ngx-checkout-index',
  templateUrl: './checkout-index.component.html',
  styleUrls: ['./checkout-index.component.scss'],
})
export class CheckoutIndexComponent {
  // variables
  cartCheckOut: ItemCartResponse[] = [];
  subTotal: number = 0;
  total: number = 0;
  discountVoucher: number = 0;
  discountDirect: number = 0;
  createOrderCommandRequest: CreateOrderCommandRequest = new CreateOrderCommandRequest();
  @ViewChild('orderForm') orderForm: NgForm | undefined;
  paymentUrl: string = '';

  // constructor
  constructor(
    private cartService: CartService,
    public fileService: FileService,
    public utilTime: UtilTime,
    private loadingService: LoadingService,
    private router: Router,
    private sweetAlertService: SweetAlertService,
    private orderService: OrderService,
    private paymentService: PaymentService,
  ) {}

  // InitData
  ngOnInit() {
    // kiểm tra đã chọn sản phẩm thanh toán
    const data = localStorage.getItem('cartCheckout');

    if (data) {
      this.cartCheckOut = JSON.parse(data);

      if (this.cartCheckOut.length < 1) {
        this.router.navigate(['/ecommerce/cart']);
      }

      this.loadCart();
    } else {
      this.router.navigate(['/ecommerce/cart']);
    }
  }

  // load cart
  loadCart() {
    this.loadingService.show();

    setTimeout(() => {
      this.createOrderCommandRequest.products = this.cartCheckOut;
      this.createOrderCommandRequest.paymentMethodId = '952d51bb-c0bc-4aaa-bdef-83d5b47b2e2a';
      this.calcTotal();
      this.loadingService.hide();
    }, 1000);
  }

  // Load price
  loadPrice(item: ItemCartResponse): number {
    const matchedUnit = item.shipmentDetailsUnits.find(
      (unit) => unit.unitId === item.unitId
    );
    return matchedUnit ? matchedUnit.salePrice : 0;
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

  // đặt hàng
  onClickOrder() {
    this.loadingService.show();

    setTimeout(() => {
      this.sweetAlertService.success('Đặt hàng thành công');

      this.loadingService.hide();
    }, 1000);
  }

  // Create Order
  onClickCreateOrder() {
    this.loadingService.show();

    this.orderService
      .create(this.createOrderCommandRequest)
      .subscribe((res) => {
        if (res.code === 200) {
          setTimeout(() => {
            this.loadingService.hide();

            if (res.obj != null) {
              console.log(res.obj);
              //window.location.href = res.obj;
            }
          }, 1000);
        }
      });
  }
}