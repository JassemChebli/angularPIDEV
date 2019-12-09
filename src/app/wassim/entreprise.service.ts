import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Entreprise } from 'app/modals/Entreprise';
import { SnotifyService, SnotifyToast } from 'ng-snotify';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  private entrepriseUrl = '/api/entreprise';  // URL to web API

  // Http Options
  httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  }
  constructor(private http: HttpClient ) { }

 getEntreprises(): Observable<Entreprise[] > {
    return this.http.get<Entreprise[]>(this.entrepriseUrl )
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

  // HttpClient API get() method => Fetch employee
  getEntreprise(id): Observable<Entreprise> {
    return this.http.get<Entreprise>(this.entrepriseUrl  + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API post() method => Create employee
  createEntreprise(ent): Observable<Entreprise > {
    return this.http.post<Entreprise>(this.entrepriseUrl, JSON.stringify(ent), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API put() method => Update employee
  updateEntreprise(id, ent): Observable<Entreprise> {
    return this.http.put<Entreprise>(this.entrepriseUrl  + '/' + id, JSON.stringify(ent), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete employee
  deleteEntreprise(id){
    return this.http.delete<Entreprise>(this.entrepriseUrl  + '/' +  id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
}
