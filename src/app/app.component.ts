import { Component, TemplateRef } from '@angular/core';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { LoadingService } from './services/loading/loading.service';
import { Subscription } from 'rxjs';

const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
const PrimaryRed = '#dd0031';
const SecondaryBlue = '#1976d2';

@Component({
  selector: 'ngx-app',
  template: `
    <ngx-loading
      [show]="loading"
      [config]="{
        animationType: ngxLoadingAnimationTypes.threeBounce,
        primaryColour: primaryColour,
        secondaryColour: secondaryColour,
        tertiaryColour: primaryColour,
        backdropBorderRadius: '3px'
      }"
      [template]="loadingTemplate">
    </ngx-loading
    ><router-outlet></router-outlet>
  `
})

export class AppComponent {
  emptyLoadingTemplate!: TemplateRef<any>;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
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

  loading = false;
  private subscription: Subscription | undefined;

  constructor(public loadingService: LoadingService) {}

  ngOnInit() {
    this.subscription = this.loadingService.loading$.subscribe(
      (loading: boolean) => {
        this.loading = loading;
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
