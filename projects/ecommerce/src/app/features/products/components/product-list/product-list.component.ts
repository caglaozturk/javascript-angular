import { Component, Input, OnInit } from '@angular/core';
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
  @Input() categoryId!: number;
  fetchStatus = 'pending';

  constructor(private productsService:ProductsService, private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getAllProducts();
    }, 1500);
  }

  getAllProducts() {
    this.productsService.getAll().subscribe(
      (response) => {
        this.productLists = response;
        this.fetchStatus = 'loaded';
      },
      (error) => {
        this.fetchStatus = 'error';
      }
    );
  }
}
