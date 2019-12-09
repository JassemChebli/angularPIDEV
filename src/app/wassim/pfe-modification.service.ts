import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { PfeFileChange } from 'app/modals/PfeFileChange';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PfeModificationService {
  private pfeUrl = '/api/pfeModification';  // URL to web API

  // Http Options
  httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  }
  constructor(private http: HttpClient) { }
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

createPfeMod(pfec): Observable<PfeFileChange > {

  return this.http.post<PfeFileChange>(this.pfeUrl, JSON.stringify(pfec), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}}
