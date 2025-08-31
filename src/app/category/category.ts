import { Component, inject } from '@angular/core';
import { Category } from './category.model';
import { CategoryService } from '../services/category';
import { Alertify } from '../services/alertify';
@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.html',
  styleUrl: './category.css',
  providers : [CategoryService]
})
export class CategoryComponent {
  title = 'Kategori Listesi';
  private alertifyService = inject(Alertify);
  private categoryService = inject(CategoryService);
  categories: Category[] = [];

  ngOnInit() {
     this.categoryService.getCategories().subscribe(data => {
    console.log(data)
    this.categories = data
   })
  }
}
