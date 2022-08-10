import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/features/categories/services/categories/categories.service';
import { Product } from '../../models/Product';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productLists!:Product[];

  constructor(private productsService:ProductsService, private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.getAllProducts();
    console.log(this.categoriesService.apiControllerUrl)
  }

  getAllProducts() {
    this.productsService.getAll().subscribe((response) => {
      this.productLists = response;
    })
  }
}
