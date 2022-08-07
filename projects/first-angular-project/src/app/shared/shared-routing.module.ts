import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductListComponent } from '../features/products/components/product-list/product-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'product-cart-list', pathMatch: 'full' },
    { path: 'homepage', component: HomepageComponent },    
    { path: 'homepage', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}