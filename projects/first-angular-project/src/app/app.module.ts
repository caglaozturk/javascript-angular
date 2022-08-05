import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { ClickProductCardDirective } from './directives/clickProductCard/click-product-card.directive';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { MultipleDirective } from './directives/multiple/multiple.directive';
import { WelcomeDirective } from './directives/welcome/welcome.directive';
import { MyForDirective } from './directives/myFor/my-for.directive';
import { ProductsModule } from './features/products/products.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './core/auth/auth.module';
import { CategoriesModule } from './features/categories/categories.module';
import { CustomersModule } from './features/customers/customers.module';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    CalculatorComponent,
    NavbarComponent,
    HomepageComponent,
    NotFoundComponent,
    RegisterComponent,
    ClickProductCardDirective,
    OrderListComponent,
    MultipleDirective,
    WelcomeDirective,
    MyForDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ProductsModule,
    CoreModule,
    SharedModule,
    AuthModule,    
    AppRoutingModule, 
    CategoriesModule, 
    CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
