import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable ,inject } from '@angular/core';
import { catchError, Observable, tap ,throwError } from 'rxjs';
import { Product } from '../product/product.model';

Product
Observable

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private http = inject(HttpClient);
  private path = "http://localhost:3000/products";

  getProducts():Observable<Product[]>{
     return this.http
     .get<Product[]>(this.path).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
     );
   
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent ) {
       errorMessage = 'Bir hata oluştu'+ err.error.message
    }else{
      errorMessage = "Sistemsel bir hata"
    }
    return throwError(errorMessage);
  }
}
