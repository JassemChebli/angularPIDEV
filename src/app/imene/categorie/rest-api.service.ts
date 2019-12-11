import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Categorie } from '../Models/Categorie';
import { PfeFile } from '../Models/PfeFile';
import { T } from '../Models/T';


@Injectable({
    providedIn: 'root'
})
export class RestApiService {

    // Define API
    apiURL = '/api/categorie';
    apiURLp = '/api/pfefichier';
    apiURLt = '/api/teacher';
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

    chose(idt:number,idc:number) {

        return this.http.put<any>(this.apiURLt + '/pick?id=' + idt +'&ids='+idc,this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        )
    }

    get(id: number): Observable<Categorie> {
        return this.http.get<Categorie>(this.apiURL + '/' + id )
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    gettg(id: number): Observable<any> {
        return this.http.get<any>(this.apiURLt + '/getg/' + id )
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }
    gett(id: number): Observable<T> {
        return this.http.get<T>(this.apiURLt + '/getg/' + id )
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }
    getFilebyyearandrole(id: number,year:number,role:string): Observable<PfeFile[]> {
        return this.http.get<PfeFile[]>(this.apiURLp + '/one/' + id+ '/' +year + '/' +role)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

    getAllprevfiles(): Observable<PfeFile[]> {
        return this.http.get<PfeFile[]>(this.apiURLp + '/prevalidated/PREVALIDER')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }
    prevalidate(index: number,spf:string,msg:string,pf:PfeFile): Observable<PfeFile> {
        return this.http.put<PfeFile>(this.apiURLp + '/modify/'+ index + '/' + spf + '/' + msg, pf)
            .pipe(
                catchError(this.handleError)
            )
    }
    graderep(index: number,g:number,pf:PfeFile): Observable<PfeFile> {
        return this.http.put<PfeFile>(this.apiURLp + '/gradereporter/'+ index + '/' + g , pf)
            .pipe(
                catchError(this.handleError)
            )
    }
    gradesuper(index: number,g:number,pf:PfeFile): Observable<PfeFile> {
        return this.http.put<PfeFile>(this.apiURLp + '/gradesupervisor/'+ index + '/' + g , pf)
            .pipe(
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


    updateteacher(index: number,t: T): Observable<T> {
        return this.http.put<T>(this.apiURLt+ '/update/'+ index,t)
            .pipe(
                catchError(this.handleError)
            )
    }

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