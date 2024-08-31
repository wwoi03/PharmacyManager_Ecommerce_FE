import { Component } from '@angular/core';
import { SignUpRequest } from 'src/app/models/requests/account/sign-up-request';
import { AccountService } from 'src/app/services/account/account.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { SweetAlertService } from 'src/app/services/sweet-alert/sweet-alert.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  // variables
  signUpRequest: SignUpRequest = new SignUpRequest();

  // constructor
  constructor(
    private accountService: AccountService,
    private authService: AuthService,
    private loadingService: LoadingService,
    private sweetAlertService: SweetAlertService,) {}

  // signUp
  signUp() {
    this.loadingService.show();

    this.accountService.signUp(this.signUpRequest).subscribe((res) => {
      if (res.code === 200) {
        setTimeout(() => {
          this.loadingService.hide();
          this.sweetAlertService.successNoButton(res.message);
        }, 1500);

        setTimeout(() => {
          window.location.href = '/ecommerce/account/sign-in';
        }, 3000);
      } else if (res.code >= 400 && res.code < 500) {
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
