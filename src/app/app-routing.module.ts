import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ecommerce',
    loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule),
  },
  { path: '', redirectTo: 'ecommerce/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'ecommerce/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
