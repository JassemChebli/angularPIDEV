import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Categorie } from 'app/modals/Categorie';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private entrepriseUrl = '/api/Categorie';  // URL to web API

  constructor(private http: HttpClient ) { }

  // tslint:disable-next-line:member-ordering

  // HttpClient API get() method => Fetch employee
  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.entrepriseUrl  )
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
    } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);

}
}
