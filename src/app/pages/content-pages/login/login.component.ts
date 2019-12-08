import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('f') lF: NgForm ;
  logged = true;
  // Reative Form
  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router,
      private route: ActivatedRoute, private auth: AuthService) { }
  // private username = ;
  // private password = ;

  // On submit button click
  onSubmit() {
    this.auth.signinUser(this.loginForm.value.userName, this.loginForm.value.password).subscribe((data) => {
      if (data != null) {
        console.log(this.auth.getToken())
        if (this.auth.getToken()['role'] === 'student') {
          if ( data.status == true ) {
            this.router.navigate(['full-layout']);
            this.loginForm.reset();
          }else {
            alert('You don\'t have access!')
          }
        }else {
          this.router.navigate(['full-layout']);
          this.loginForm.reset();
        }
      }else {
        this.logged = false;
        console.log('not working');
      }
    })
  }
  // On Forgot password link click
  onForgotPassword() {
      // this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
  }
  // On registration link click
  onRegister() {
      // this.router.navigate(['register'], { relativeTo: this.route.parent });
  }

}
