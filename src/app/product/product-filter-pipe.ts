import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.model';


@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {


  transform(value: Product[], filterText?: string): Product[] {
   
    if (!filterText) {
      return value;
    }

    const searchTerm = filterText.toLocaleLowerCase();
    
    return value.filter((p: Product) => 
      p.name?.toLocaleLowerCase().includes(searchTerm)
    );
  }

}
