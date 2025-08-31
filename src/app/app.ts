import { ApplicationConfig, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { CategoryComponent } from "./category/category";
import { ProductComponent } from "./product/product";
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';



export const appConfig : ApplicationConfig = {
  providers : [
    provideHttpClient(),
    
  ]
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, CategoryComponent, ProductComponent,FormsModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})



export class App {
  protected readonly title = signal('shop');
}
