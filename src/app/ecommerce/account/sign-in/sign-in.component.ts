import { Component, TemplateRef } from '@angular/core';
import { SignInRequest } from '../../../models/requests/account/sign-in-request';
import { AccountService } from '../../../services/account/account.service';
import { AuthService } from '../../../services/auth/auth.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';

const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
const PrimaryRed = '#dd0031';
const SecondaryBlue = '#1976d2';

@Component({
  selector: 'ngx-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  emptyLoadingTemplate!: TemplateRef<any>;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;
  public primaryColour = PrimaryWhite;
  public secondaryColour = SecondaryGrey;
  public coloursEnabled = false;
  public loadingTemplate!: TemplateRef<any>;
  public config = {
    animationType: ngxLoadingAnimationTypes.none,
    primaryColour: this.primaryColour,
    secondaryColour: this.secondaryColour,
    tertiaryColour: this.primaryColour,
    backdropBorderRadius: '3px',
  };
  signInRequest: SignInRequest = new SignInRequest();

  constructor(
    private accountService: AccountService,
    private authService: AuthService
  ) {}

  signIn() {
    this.loading = true;

    this.accountService.signIn(this.signInRequest).subscribe((res) => {
      if (res.code === 200) {
        this.authService.setToken(res.obj.token);
        this.authService.setName(res.obj.name);
        console.log(this.authService.getToken());
        // this.toast.successToast("Thành Công", res.message);

        setTimeout(() => {
          this.loading = false;
          //window.location.href = "/admin/dashboard";
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
