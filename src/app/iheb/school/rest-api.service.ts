import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {School} from '../Models/School';
import {Site} from '../Models/Site';
import {Admin} from '../Models/Admin';
import {HeadDepartment} from '../Models/HeadDepartment';
import {Departement} from '../Models/Departement';

@Injectable({
    providedIn: 'root'
})
export class RestApiService {

    // Define API
    apiURLSchool = '/api/school';
    apiURLSite = '/api/site';
    apiURLDepartment = '/api/department';


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


    addSchool(name: string, address: string, slogon: string, email: string, tel: string, admin: Admin): Observable<School> {
        let school = new School();
        school.name = name;
        school.address = address;
        school.slogon = slogon;
        school.email = email;
        school.tel = tel;
        school.admin = admin;
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

    getAdmins(): Observable<Admin[]> {
        return this.http.get<Admin[]>('/api/admin/available')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    getSchoolByAdmin(email: string): Observable<School> {
        return this.http.get<School>('/api/admin/mySchool/' + email)
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

    getMySites(email: string): Observable<Site[]> {
        return this.http.get<Site[]>('/api/admin/mySites/' + email)
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

    addSite(site: Site): Observable<Site> {
        console.log(JSON.stringify(site));
        return this.http.post<Site>(this.apiURLSite, site)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    deleteSite(index: any): Observable<Site> {
        return this.http.delete<Site>(this.apiURLSite + '/' + index)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    getSiteById(id: number): Observable<Site> {
        return this.http.get<Site>(this.apiURLSite + '/' + id)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    getsitebydirector(email: string): Observable<Site> {
        return this.http.get<Site>('/api/site/mySite/'+email)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    getDepbydirector(email: string): Observable<Departement[]> {
        return this.http.get<Departement[]>('/api/site/myDeps/'+email)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    getInternDir(): Observable<HeadDepartment[]> {
        return this.http.get<HeadDepartment[]>('/api/intern-dir/available')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    getMyDepartments(email: string): Observable<Departement[]> {
        return this.http.get<Departement[]>('/api/admin/myDepatments/' + email)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    getHeads(): Observable<HeadDepartment[]> {
        return this.http.get<HeadDepartment[]>('/api/head-dep/available')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }


    addDepartment(dep: Departement): Observable<Departement> {
        return this.http.post<Departement>(this.apiURLDepartment, dep)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }


    updateDep(dep: Departement): Observable<Departement> {
        return this.http.put<Departement>(this.apiURLDepartment, dep)
            .pipe(
                catchError(this.handleError)
            )
    }

    deleteDep(index: any): Observable<Departement> {
        return this.http.delete<Departement>(this.apiURLDepartment + '/' + index)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

}
