import { Component, inject } from '@angular/core';
import { Product } from './product.model';
import { UpperCasePipe, CurrencyPipe } from '@angular/common';
import { ProductFilterPipe } from './product-filter-pipe';
import { FormsModule } from '@angular/forms';
import { Alertify } from '../services/alertify';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-product',
  imports: [UpperCasePipe, CurrencyPipe, ProductFilterPipe, FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
  providers:[ProductService]
})
export class ProductComponent {
  title = 'Ürün Listesi';
  filterText = '';
  private alertifyService = inject(Alertify);
  private productService = inject(ProductService);
  products: Product[] = [];
 

  ngOnInit() {
   this.productService.getProducts().subscribe(data => {
    console.log(data)
    this.products = data
   })
  }

  addToCart(product: Product) {
    this.alertifyService.success(product.name + ' sepete eklendi.');
  }
}
