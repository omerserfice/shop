import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable ,inject } from '@angular/core';
import { catchError, Observable, tap ,throwError } from 'rxjs';
import { Category } from '../category/category.model';

Observable

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private http = inject(HttpClient);
  private path = "http://localhost:3000/categories";

  getCategories():Observable<Category[]>{
     return this.http
     .get<Category[]>(this.path).pipe(
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
