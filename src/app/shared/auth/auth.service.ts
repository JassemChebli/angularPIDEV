import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {
  token: string;

  constructor(private logins: LoginService, private _cookieService: CookieService) {}

  signupUser(email: string, password: string) {
    // your code for signing up the new user
  }

  signinUser(email: string, password: string) {
    // your code for checking credentials and getting tokens for for signing in user
      return this.logins.getLogin(email, password);
  }

  logout() {
    this._cookieService.delete('access_token', '/', 'localhost');
    // const date1 = new Date(1575883232 * 1000);
    // alert(date1 > date )

  }

  getToken() {
    return  this.token = this.parseJwt(this._cookieService.get('access_token'));
  }

  isAuthenticated() {
    // here you can check if user is authenticated or not through his token
    if (this.getToken()) {
      const date = new Date();
      return (this.convertTime(this.getToken()).getTime() > date.getTime());
    }
    return false;
  }

  parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  }
  convertTime(token) {
    return new Date(token.exp * 1000);
  }
}


