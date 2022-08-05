import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/features/categories/models/category';
import { CategoryService } from 'src/app/features/categories/services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories!: Category[];

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    setTimeout(() => {      
      this.getCategories();
    }, 200);
  }

  getCategories() {
    this.categoryService.getList().subscribe((response) => {
      this.categories = response;
    })
  }

  getCategoryById(category:Category) {
    console.log(category)
  }

}
