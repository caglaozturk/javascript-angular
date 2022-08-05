import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ProductCardListComponent } from './features/products/components/product-card-list/product-card-list.component';
import { ProductListComponent } from './features/products/components/product-list/product-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OrderListComponent } from './features/orders/pages/order-list/order-list.component';
import { ProductFormComponent } from './features/products/pages/product-form/product-form.component';
import { UpdateCustomerComponent } from './features/customers/pages/update-customer/update-customer.component';
import { ProductDashboardComponent } from './features/products/pages/product-dashboard/product-dashboard.component';
import { CustomerDashboardComponent } from './features/customers/pages/customer-dashboard/customer-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'product-cart-list', pathMatch: 'full' },
  { path: 'homepage', component: ProductListComponent},
  { path: 'product-cart-list', component: ProductCardListComponent},
  { path: 'calculator', component: CalculatorComponent },
  { path: 'dashboard/customer/add', component: UpdateCustomerComponent },
  {path: 'dashboard/customers',component:CustomerDashboardComponent },
  {path: 'dashboard/customer/:id',component:UpdateCustomerComponent },
  {path: 'dashboard/product/add',component:ProductFormComponent },
  {path: 'dashboard/products',component:ProductDashboardComponent },
  {path: 'dashboard/product/:id',component:ProductFormComponent },
  {path: 'order-list', component:OrderListComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
