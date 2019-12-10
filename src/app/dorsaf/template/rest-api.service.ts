import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { template } from '../model/template';

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
    
    getAllStudents() : Observable<Object> {
        return this.http.get<Object>(this.apiURL+'/student/Pfe')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
        
      }


    getTemplateById(id: number) {
        
        return this.http.get<Object>(this.apiURL+'/template/'+id)
        
        .pipe(
            retry(1),
            catchError(this.handleError)
        )
  }
  updateTemplate(template: any, id:number) {
    console.log(template)
    return this.http.put<any>(this.apiURL + '/template/'+id, JSON.stringify(template), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        )
}
  

   // HttpClient API get() method => Fetch accepted pfe file list
   getAll(): Observable<Object> {
    return this.http.get<Object>(this.apiURL)
        .pipe(
            retry(1),
            catchError(this.handleError)
        )
}

getStudents(id) : Observable<Object> {
    return this.http.get<Object>(this.apiURL+'/student/'+id)
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
