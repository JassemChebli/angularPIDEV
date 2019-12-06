import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Categorie } from '../Models/Categorie';

@Injectable({
    providedIn: 'root'
})
export class RestApiService {

    // Define API
    apiURL = '/api/categorie';

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
    getAll(): Observable<Categorie[]> {
        return this.http.get<Categorie[]>(this.apiURL)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    get(id: number): Observable<Categorie> {
        return this.http.get<Categorie>(this.apiURL + '/' + id)
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
    ////////////////////////CRUD CATEGORIE//////////////////////////


    updateSite(index: number,categorie: Categorie): Observable<Categorie> {
        return this.http.put<Categorie>(this.apiURL+ '/modify/'+ index, categorie)
            .pipe(
                catchError(this.handleError)
            )
    }

    addSite(l: string, s: boolean): Observable<Categorie> {
        let cat = new Categorie();
        cat.label = l;
        cat.status = s;
     
        return this.http.post<Categorie>(this.apiURL, cat)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    deleteSite(index: any): Observable<Categorie> {
        return this.http.delete<Categorie>(this.apiURL + '/delete/' + index)
            .pipe(catchError(this.handleError)
            )
    }
}