import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountMenuComponent } from './account-menu/account-menu.component';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  NavbarComponent,
  AccountMenuComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ThemeModule { }
