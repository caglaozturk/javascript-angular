import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardListComponent } from './components/product-card-list/product-card-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SaleDirective } from './sale/sale.directive';
import { KdvPipe } from './pipes/kdv/kdv.pipe';
import { FilterProductPipe } from './pipes/filterProduct/filter-product.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryListComponent } from '../categories/components/category-list/category-list.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    ProductCardListComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductDashboardComponent,
    ProductFormComponent,
    CategoryListComponent,
    SaleDirective,
    KdvPipe,
    FilterProductPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule, 
    CoreModule,
    ReactiveFormsModule
  ],
  exports: [
    // Başka modüllerin de kullanmasını istiyorsam export etmeliyim
    // homepage de örneğin product-cart-list'i kullandığım için burada export ettim ama diğer componentleri kullanmadığım için onları export etmeme gerek kalmadı
    ProductCardListComponent,
    KdvPipe
  ],
})
export class ProductsModule { }
