import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/core/auth/guards/login-guard/login-guard.guard';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  { path: 'add-product', component: AddProductComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
