import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { CategoryComponent } from './category/category.component';
import { SaleProductComponent } from './sale-product/sale-product.component';
import { SellingProductComponent } from './selling-product/selling-product.component';
import { FeaturedCategoryComponent } from './featured-category/featured-category.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

export const routedComponents = [
  HomeComponent,
  BannerComponent,
  CategoryComponent,
  SaleProductComponent,
  SellingProductComponent,
  FeaturedCategoryComponent,
];