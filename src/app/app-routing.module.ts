import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ecommerce',
    loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule),
    //canActivate: [AuthGuard], // Bảo vệ các tuyến đường dưới 'admin'
  },
  // {
  //   path: 'admin-public',
  //   loadChildren: () => import('./admin-public/admin-public.module').then(m => m.AdminPublicModule),
  // },
  { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'admin/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
