import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthService {
  token: string;

  constructor(private logins: LoginService) {}

  signupUser(email: string, password: string) {
    // your code for signing up the new user
  }

  signinUser(email: string, password: string) {
    // your code for checking credentials and getting tokens for for signing in user
      return this.logins.getLogin(email, password);
  }

  logout() {   
    this.token = null;
  }

  getToken() {    
    return this.token;
  }

  isAuthenticated() {
    // here you can check if user is authenticated or not through his token 
    return true;
  }
}
