import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { PfeFile } from 'app/modals/PfeFile';
import { PfeFileComponent } from './pfe/pfe-file/pfe-file.component';
import { retry, catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PfeService {
  private pfeUrl = '/api/pfe';  // URL to web API

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

createPfe(pfe): Observable<PfeFile > {

  return this.http.post<PfeFile>(this.pfeUrl, JSON.stringify(pfe), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}
getPfe(id): Observable<PfeFile> {
  return this.http.get<PfeFile>(this.pfeUrl + '/'  + id)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}
updatePfe(id, ent): Observable<PfeFile> {
  return this.http.put<PfeFile>(this.pfeUrl  + '/' + id, JSON.stringify(ent), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

}
