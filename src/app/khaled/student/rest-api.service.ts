import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

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


    // HttpClient API get() method => Fetch notification list
    getStudents() {
        return this.http.get<any>(this.apiURL + '/student')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }
    // HttpClient API get() method => Fetch notification list
    getClasses() {
        return this.http.get<any>(this.apiURL + '/admin/class')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    // HttpClient API get() method => Fetch notification
    getStudent(id: number) {
        return this.http.get<any>(this.apiURL + '/student/' + id)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    // HttpClient API post() method => Create employee
    createEmployee(student: any) {
        return this.http.post<any>(this.apiURL + '/student/add', JSON.stringify(student), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }
    /*
    // HttpClient API put() method => Update employee
    updateEmployee(id, employee): Observable<Employee> {
        return this.http.put<Employee>(this.apiURL + '/employees/' + id, JSON.stringify(employee), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }*/

    // HttpClient API delete() method => Delete employee
    deleteStudent(id: number) {
        return this.http.delete<any>(this.apiURL + '/student/' + id)
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
