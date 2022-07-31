import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ProductCardListComponent } from './components/product-card-list/product-card-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';

const routes: Routes = [
  { path: '', redirectTo: 'product-cart-list', pathMatch: 'full' },
  { path: 'homepage', component: ProductListComponent},
  { path: 'product-cart-list', component: ProductCardListComponent},
  { path: 'add-product', component: AddProductComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'dashboard/customer',component:DashboardComponent },
  {path: 'dashboard/customer/:id',component:UpdateCustomerComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
