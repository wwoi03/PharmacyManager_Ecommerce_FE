import { Component, TemplateRef } from '@angular/core';
import { SignInRequest } from '../../../models/requests/account/sign-in-request';
import { AccountService } from '../../../services/account/account.service';
import { AuthService } from '../../../services/auth/auth.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { SweetAlertService } from 'src/app/services/sweet-alert/sweet-alert.service';

@Component({
  selector: 'ngx-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  signInRequest: SignInRequest = new SignInRequest();

  constructor(
    private accountService: AccountService,
    private authService: AuthService,
    private loadingService: LoadingService,
    private sweetAlertService: SweetAlertService,
  ) {}

  // Đăng nhập
  signIn() {
    this.loadingService.show();

    this.accountService.signIn(this.signInRequest).subscribe((res) => {
      if (res.code === 200) {
        this.authService.setToken(res.obj.token);
        this.authService.setName(res.obj.name);
        

        setTimeout(() => {
          this.loadingService.hide();
          this.sweetAlertService.successNoButton('Đăng nhập thành công');
        }, 1500);

        setTimeout(() => {
          window.location.href = '/ecommerce/home';
        }, 3000);
      } else if (res.code === 401) {
        setTimeout(() => {
          this.loadingService.hide();
          this.sweetAlertService.error(
            res.validationNotify?.message ?? 'Lỗi gì không biết luôn'
          );
        }, 1000);
      } else if (res.code === 403) {
        setTimeout(() => {
          this.loadingService.hide();
          this.sweetAlertService.error(
            res.validationNotify?.message ?? 'Lỗi gì không biết luôn'
          );
        }, 1000);
      }
    });
  }
}
