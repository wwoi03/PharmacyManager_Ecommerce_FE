import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { SweetAlertService } from 'src/app/services/sweet-alert/sweet-alert.service';

@Component({
  selector: 'ngx-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // variables
  isSignIn: boolean = false;
  customerName: string | undefined;
  quantityCart: number = 0;

  // constructor
  constructor(
    private router: Router,
    private authService: AuthService,
    private sweetAlertService: SweetAlertService,
    private loadingService: LoadingService,
    private cartService: CartService
  ) {

  }

  ngOnInit() {
    if (this.authService.getToken()) {
      this.isSignIn = true;
    }

    const signInName = this.authService.getName();
    this.customerName = signInName ? signInName : "Chưa đăng nhập";
    this.loadQuantityCart();
  }

  // Load quantity card
  loadQuantityCart() {
    this.cartService.getCart().subscribe((res) => {
      if (res.code === 200) {
        const quantity = res.obj?.length ?? 0;
        localStorage.setItem('quantityCart', quantity.toString());
        this.quantityCart = Number(localStorage.getItem('quantityCart'));
      }
    });
  }

  signIn() {
    this.router.navigate(['/ecommerce/account/sign-in']);
  }

  logout() {
    this.loadingService.show();
    this.authService.logout();

    setTimeout(() => {
      this.loadingService.hide();
      this.sweetAlertService.successNoButton("Đăng xuất thành công");
    }, 1500);

    setTimeout(() => {
      window.location.href = '/ecommerce/home';
    }, 3000);
  }

  onClickCart() {
    this.router.navigate(['/ecommerce/cart/cart-index']);
  }

  onClickMyAccount() {
    this.router.navigate(['/ecommerce/order/order-index']);
  }

  clickMyOrder() {
    this.router.navigate(['/ecommerce/order/order-index']);
  }
}
