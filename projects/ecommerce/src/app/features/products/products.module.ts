import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent,
    FilterProductPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
