import { Component,inject } from '@angular/core';
import { Product } from '../product.model';
import { CategoryService } from '../../services/category';
import { Category } from '../../category/category.model';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductService } from '../../services/product';
import { Alertify } from '../../services/alertify';

@Component({
  selector: 'app-product-add-forms1',
  imports: [FormsModule],
  templateUrl: './product-add-forms1.html',
  styleUrl: './product-add-forms1.css',
  providers:[CategoryService,ProductService]
})
export class ProductAddForms1 {
  
  private categoryService = inject(CategoryService);
  private productService = inject(ProductService);
  private alertifyService = inject(Alertify);
  model : Product = new Product();

  categories: Category[] = [];
  
    ngOnInit() {
       this.categoryService.getCategories().subscribe(data => {
      console.log(data)
      this.categories = data
     })
    }

    add(form:NgForm){
        this.productService.addProduct(this.model).subscribe(data=>{
        this.alertifyService.success(data.name + " başarıyla eklendi.")
        });
    }

}
