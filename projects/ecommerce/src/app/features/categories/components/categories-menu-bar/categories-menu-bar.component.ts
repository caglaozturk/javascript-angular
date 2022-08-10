import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/features/products/services/products/products.service';
import { Category } from '../../models/Category';
import { CategoriesService } from '../../services/categories/categories.service';

@Component({
  selector: 'app-categories-menu-bar',
  templateUrl: './categories-menu-bar.component.html',
  styleUrls: ['./categories-menu-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesMenuBarComponent implements OnInit {
  categories!:Category[];

  constructor(private categoriesService: CategoriesService, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getList().subscribe((response => {
      this.categories = response;
      console.log("🚀 ~ file: categories-menu-bar.component.ts ~ line 24 ~ CategoriesMenuBarComponent ~ this.categoriesService.getList ~ this.categories", this.categories)
    }))
  }
}
