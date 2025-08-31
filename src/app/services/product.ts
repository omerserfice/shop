import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Product } from '../product/product.model';

Product;
Observable;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private path = 'http://localhost:3000/products';

  getProducts(categoryId: number): Observable<Product[]> {
    let newPath = this.path;

    if (categoryId) {
      newPath += '?categoryId=' + categoryId;
    }

    return this.http.get<Product[]>(newPath).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
    
   
  addProduct(product:Product):Observable<Product>{
    
    const httpOptions = {
      headers:new HttpHeaders(
        {
          'Content-Type':'application/json',
          'Authorization':'Token'
        }
      )
    }
    
    return this.http.post<Product>(this.path,product,httpOptions).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }




  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu' + err.error.message;
    } else {
      errorMessage = 'Sistemsel bir hata';
    }
    return throwError(errorMessage);
  }
}
