import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CategoriesService } from 'src/app/features/categories/services/categories/categories.service';
import { Product } from '../../models/Product';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges  {
  productLists!:Product[];
  @Input() categoryId!: number;
  fetchStatus = 'pending';
  pageSize:number=10;

  constructor(private productsService:ProductsService, private categoriesService:CategoriesService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAllProductsByCategoryId();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getAllProducts();
    }, 2000);
  }

  getAllProductsByCategoryId() {
    if (!this.categoryId || this.categoryId <= 0) {
      this.getAllProducts();
      return;
    }
    this.fetchStatus = 'pending';
    setTimeout(() => {
      this.productsService.getAllByCategories(this.categoryId).subscribe(
        (response) => {
          this.productLists = response;
          this.fetchStatus = 'loaded';
        },
        (error) => {
          this.fetchStatus = 'error';
        }
      );
    }, 2000);
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
