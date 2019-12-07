import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

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

  deleteOption(id:number){

    return this.http.delete<any>(this.apiURL + '/option/delete/' + id)
    .pipe(
        retry(1),
        catchError(this.handleError1)
    )


  }

  createOption(option: any) {
    return this.http.post<any>(this.apiURL + '/option/add', JSON.stringify(option), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        )
}

updateOption(option: any) {
    return this.http.put<any>(this.apiURL + '/option/update', JSON.stringify(option), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        )
}

getAll(): Observable<Object> {
    return this.http.get<Object>(this.apiURL+'/option/all')
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
getoptionById(id){
    return this.http.get<Object>(this.apiURL+'/option/'+id)
    .pipe(
        retry(1),
        catchError(this.handleError)
    )


}
handleError1(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = "you can't delete this option is used in PfeFile and classes ";
    } else {
        // Get server-side error
        errorMessage = "you can't delete this option is used in PfeFile and classes ";
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
