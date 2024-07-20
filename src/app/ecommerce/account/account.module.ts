import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule, routedComponents } from './account-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';


@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,

    RouterModule,
    FormsModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.5)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff',
      fullScreenBackdrop: false,
    }),
  ]
})
export class AccountModule { }
