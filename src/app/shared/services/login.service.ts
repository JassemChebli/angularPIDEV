import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    // Define API
    apiURL = 'api/auth/login';

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
    getLogin(email: string, password: string) {
        return this.http.get<any>(this.apiURL + '?email=' + email + '&password=' + password)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    // HttpClient API get() method => Fetch notification
    getNotification(id): Observable<Notification> {
        return this.http.get<Notification>(this.apiURL + '/student/' + id)
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
        Swal.fire(
            'The Internet?',
            errorMessage,
            'question'
          )
        return throwError(errorMessage);
    }

}