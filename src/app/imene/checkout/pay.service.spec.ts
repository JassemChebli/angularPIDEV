import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { T } from '../Models/T';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  /*describe('PayService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
  
    it('should be created', () => {
      const service: PayService = TestBed.get(PayService);
      expect(service).toBeTruthy();
    });
  });
  */
 apiURLt = '/api/teacher';
 
 constructor(private http: HttpClient) { }

 gett(id: number): Observable<T> {
  return this.http.get<T>(this.apiURLt + '/getg/' + id )
      .pipe(
          retry(1),
          catchError(this.handleError)
      )
}
// Http Options
httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
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


