import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomepageComponent } from './common/pages/homepage/homepage.component';
import { ProductsModule } from './products/products.module';
import { SharedModule } from '../shared/shared.module';
import { CategoriesModule } from './categories/categories.module';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ProductsModule,
    SharedModule,
    CategoriesModule
  ]
})
export class FeaturesModule { }
