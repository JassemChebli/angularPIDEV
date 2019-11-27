import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Notification } from './notification';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RestApiService {

    // Define API
    apiURL = '/api/history';

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
    getNotifications(): Observable<Notification> {
        return this.http.get<Notification>(this.apiURL + '/teachers')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    // HttpClient API get() method => Fetch notification
    getNotification(id): Observable<Notification> {
        return this.http.get<Notification>(this.apiURL + '/teacher/' + id)
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