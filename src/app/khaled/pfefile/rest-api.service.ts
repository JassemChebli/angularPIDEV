import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

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


    // HttpClient API get() method => Fetch pfe list
    getProjects() {
        return this.http.get<any>(this.apiURL + '/pfe')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    // HttpClient API get() method => Fetch pfe list
    getNonTreateds() {
        return this.http.get<any>(this.apiURL + '/pfe/NonTreated')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    // HttpClient API get() method => Fetch pfe list
    getFiltredProjects(conditions: any) {
        return this.http.post<any>(this.apiURL + '/pfe/filtred', JSON.stringify(conditions), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    // HttpClient API get() method => Fetch pfe list
    denyProject(reason: any) {
        return this.http.post<any>(this.apiURL + '/pfe/denial', JSON.stringify(reason), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

     // HttpClient API get() method => Fetch pfe list
     approveProject(id: any) {
        return this.http.post<any>(this.apiURL + '/pfe/approval', JSON.stringify({id: id}), this.httpOptions)
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
            // Error Code: ${error.status}\n
            errorMessage = `Message: ${error.message}`;
        }
        Swal.fire(
            'The Internet?',
            errorMessage,
            'question'
          )
        return throwError(errorMessage);
    }
}
