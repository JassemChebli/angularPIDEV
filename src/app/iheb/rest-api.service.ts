import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {School} from './Models/School';
import {Site} from './Models/Site';
import {json} from 'ng2-validation/dist/json';

@Injectable({
    providedIn: 'root'
})
export class RestApiService {

    // Define API
    apiURLSchool = '/api/school';
    apiURLSite = '/api/site';

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {
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
        console.error(errorMessage);
        return throwError(errorMessage);
    }

    /*========================================
      CRUD Methods for consuming RESTful API SCHOOLS
    =========================================*/


    // HttpClient API get() method => Fetch accepted pfe file list
    getAll(): Observable<School[]> {
        return this.http.get<School[]>(this.apiURLSchool)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }


    get(id: number): Observable<School> {
        return this.http.get<School>(this.apiURLSchool + '/' + id)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }


    addSchool(name: string, address: string, slogon: string, email: string, tel: string): Observable<School> {
        let school = new School();
        school.name = name;
        school.address = address;
        school.slogon = slogon;
        school.email = email;
        school.tel = tel;
        return this.http.post<School>(this.apiURLSchool, school)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }


    updateSchool(school: School): Observable<School> {
        return this.http.put<School>(this.apiURLSchool, school)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    deleteSchool(index: any): Observable<School> {
        return this.http.delete<School>(this.apiURLSchool + '/' + index)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }


    getSites(id: number): Observable<Site[]> {
        return this.http.get<Site[]>(this.apiURLSchool + '/' + id + '/sites')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    /*========================================
      CRUD Methods for consuming RESTful API SITES
    =========================================*/

    getAllSites(): Observable<Site[]> {
        return this.http.get<Site[]>(this.apiURLSite)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    updateSite(site: Site): Observable<Site> {
        return this.http.put<Site>(this.apiURLSite, site)
            .pipe(
                catchError(this.handleError)
            )
    }

    addSite(name: string, address: string, dateS: Date, dateE: Date): Observable<Site> {
        let site = new Site();
        site.nom = name;
        site.address = address;
        site.dateOfSessionStarts = dateS;
        site.dateOfSessionEnds = dateE;
        return this.http.post<Site>(this.apiURLSite, site)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    deleteSite(index: any): Observable<Site> {
        return this.http.delete<Site>(this.apiURLSite + '/' + index)
            .pipe(catchError(this.handleError)
            )
    }



}
