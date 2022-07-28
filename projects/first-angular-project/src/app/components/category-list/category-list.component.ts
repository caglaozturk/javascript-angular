import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

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
    }, 2000);
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
