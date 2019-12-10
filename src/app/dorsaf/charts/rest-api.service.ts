import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
 
 

  
    // Define API
    apiURL = '/api/stat/Categorie';
    apiURL2 = '/api/stat/evolution/';
    apiURL3 = '/api';
    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private http: HttpClient) { }

    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/


    // HttpClient API get() method => Fetch accepted pfe file list
    getAll(): Observable<Object> {
        return this.http.get<Object>(this.apiURL)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    getCategoryByYear(category:string): Observable<Object> {
        return this.http.get<Object>(this.apiURL2+category)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    Countrypercent(country: any, i: string) :Observable<Object> {
        return this.http.get<Object>(this.apiURL3+'/stat?country='+country+'&year='+i)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
      }
    // Error handling
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
