import { Component } from '@angular/core';
import { Category } from './category.model';
@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.html',
  styleUrl: './category.css'
})
export class CategoryComponent {
 title = "Kategori Listesi"
 categories : Category[] = [
       {id:1,name:"Elektronik"},
       {id:2,name:"Bilgisayar"},
       {id:3,name:"İletişim"},
       {id:4,name:"Müzik"}
 ]
}
