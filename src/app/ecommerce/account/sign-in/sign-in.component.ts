import { Component, TemplateRef } from '@angular/core';
import { SignInRequest } from '../../../models/requests/account/sign-in-request';
import { AccountService } from '../../../services/account/account.service';
import { AuthService } from '../../../services/auth/auth.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

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
    private loadingService: LoadingService
  ) {}

  signIn() {
    this.loadingService.show();

    this.accountService.signIn(this.signInRequest).subscribe((res) => {
      if (res.code === 200) {
        this.authService.setToken(res.obj.token);
        this.authService.setName(res.obj.name);
        console.log(this.authService.getToken());
        // this.toast.successToast("Thành Công", res.message);

        setTimeout(() => {
          this.loadingService.hide();
          
          window.location.href = "/ecommerce/home";
        }, 1000);
      } else if (res.code === 401) {
        // setTimeout(() => {
        //   this.loading = false;
        //   this.toast.warningToast("Thất bại", res.message);
        // }, 1000);
        console.log(res);
      } else if (res.code === 403) {
        // setTimeout(() => {
        //   this.loading = false;
        //   this.toast.warningToast("Thất bại", res.message);
        // }, 1000);
        console.log(res);
      }
    });
  }
}
