import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartModule } from '../features/cart/cart.module';
import { ProductsModule } from '../features/products/products.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [NavbarComponent, HomepageComponent,NotFoundComponent],
  imports: [CommonModule, SharedRoutingModule, ProductsModule, CartModule],
  exports: [NavbarComponent]
})
export class SharedModule {}