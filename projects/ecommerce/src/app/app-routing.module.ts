import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardLayoutComponent} from './shared/layouts/dashboard-layout/dashboard-layout.component';
import {DashboardHomeComponent} from './shared/pages/dashboard-home/dashboard-home.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {path: '', component: DashboardHomeComponent, pathMatch: 'full'},
      {
        path: 'products',
        loadChildren: () =>
          import('./features/products/products-routing.module').then(
            m => m.ProductsRoutingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}