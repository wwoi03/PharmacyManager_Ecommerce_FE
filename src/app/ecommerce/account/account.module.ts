import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule, routedComponents } from './account-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,

    RouterModule,
    FormsModule,
  ]
})
export class AccountModule { }
