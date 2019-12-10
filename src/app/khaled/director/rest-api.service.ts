import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RestApiService {

    // Define API
    apiURL = '/api';

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


    // HttpClient API get() method => Fetch notification list
    getDirectors() {
        return this.http.get<any>(this.apiURL + '/intern-dir')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }
   /* // HttpClient API get() method => Fetch notification list
    getClasses() {
        return this.http.get<any>(this.apiURL + '/admin/class')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }*/

    // HttpClient API get() method => Fetch notification
    getDirector(id: number) {
        return this.http.get<any>(this.apiURL + '/intern-dir/' + id)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    // HttpClient API post() method => Create employee
    createDirector(director: any) {
        return this.http.post<any>(this.apiURL + '/intern-dir/add', JSON.stringify(director), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }
    
    // HttpClient API put() method => Update employee
    updateDirector(director: any) {
        return this.http.put<any>(this.apiURL + '/intern-dir', JSON.stringify(director), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    // HttpClient API delete() method => Delete employee
    deleteDirector(id: number) {
        return this.http.delete<any>(this.apiURL + '/intern-dir/delete/' + id)
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
