import { Component } from '@angular/core';
import { SignInRequest } from '../../../models/requests/account/sign-in-request';
import { AccountService } from '../../../services/account/account.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'ngx-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  signInRequest: SignInRequest = new SignInRequest();

  constructor(
    private accountService: AccountService,
    private authService: AuthService
  ) {}

  signIn() {
    this.accountService.signIn(this.signInRequest).subscribe((res) => {
      if (res.code === 200) {
        this.authService.setToken(res.obj.token);
        this.authService.setName(res.obj.name);
        // this.toast.successToast("Thành Công", res.message);

        // setTimeout(() => {
        //   this.loading = false;
        //   window.location.href = "/admin/dashboard";
        // }, 1000);
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
