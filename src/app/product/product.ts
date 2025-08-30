import { Component,inject } from '@angular/core';
import { Product } from './product.model';
import { UpperCasePipe,CurrencyPipe } from '@angular/common';
import { ProductFilterPipe } from './product-filter-pipe';
import { FormsModule } from '@angular/forms';
import { Alertify } from '../services/alertify';



@Component({
  selector: 'app-product',
  imports: [UpperCasePipe,CurrencyPipe,ProductFilterPipe,FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {
 title = "Ürün Listesi"
 filterText = ""
 private alertifyService = inject(Alertify);
 products : Product[] = [
     {
       id:1,name:"Laptop",price : 22500,categoryId:1,description:"Asus ZenBook",imageUrl:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
     },
     {
       id:2,name:"Mouse",price : 500,categoryId:2,description:"Logitech",imageUrl:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     },
      {
       id:3,name:"Monitor",price : 5000,categoryId:3,description:"MSI",imageUrl:"https://media.istockphoto.com/id/2152139488/photo/a-computer-desk-in-a-modern-co-working-space-feature-a-white-screen-computer-mockup.webp?a=1&b=1&s=612x612&w=0&k=20&c=p4Oo-DT01IknZ-1tV12eJ_LXbZFqt9yJa3zTUgzdYXg="
     },
     {
       id:4,name:"Laptop Standı",price : 300,categoryId:1,description:"", imageUrl:"https://images.unsplash.com/photo-1671464884932-842296b12314?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     },
     {
       id:5,name:"Klavye",price : 150,categoryId:1,description:"Logitech",imageUrl:"https://images.unsplash.com/photo-1637356679509-07077266b238?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     },
      {
       id:6,name:"Tablet",price : 10000,categoryId:1,description:"MSI",imageUrl:"https://images.unsplash.com/photo-1625864667534-aa5208d45a87?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     },     
  ] 

  addToCart(product:Product){
    this.alertifyService.success(product.name+" sepete eklendi.");
  }
}
