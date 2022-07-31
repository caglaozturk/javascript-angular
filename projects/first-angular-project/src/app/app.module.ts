import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCardListComponent } from './components/product-card-list/product-card-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductListComponent,
    CalculatorComponent,
    NavbarComponent,
    HomepageComponent,
    NotFoundComponent,
    ProductCardComponent,
    ProductCardListComponent,
    CategoryListComponent,
    RegisterComponent,
    DashboardComponent,
    UpdateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
