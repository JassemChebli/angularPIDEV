import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestApiService } from '../rest-api.service'
import { AuthService } from 'app/shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  enable = true;
  classes = [];
  classe: any;
  style: string;
  studentForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    tel: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(11), Validators.pattern('[0-9]+')]),
    sexe: new FormControl('Female'),
    status: new FormControl('false'),
    birthDate: new FormControl('', [Validators.required]),
    classe: new FormGroup({
      id: new FormControl('', [Validators.required]),
    })
  });

  constructor(private router: Router, private api: RestApiService, private auth: AuthService) { }
  // tslint:disable-next-line: member-ordering
  role = this.auth.getToken()['role'];

  ngOnInit() {
    this.loadClasses();
    if (this.role === 'admin') {this.style = 'last';}
  }

  loadClasses() {
    this.api.getClasses().subscribe((data) => {
      console.log(data)
      data.forEach(element => {
        if (element.scholarYear === '2019') {
          this.classes.push(element);
        }
      });
    });
  }

  /*changeClass(e) {
    this.classe = { id: +e.target.value }
    this.studentForm.get('classe').setValue(this.classe);
    console.log(this.studentForm.get('classe').value)
  }*/

  onSubmit() {
    if (this.studentForm.valid) {
      this.api.createEmployee(this.studentForm.value).subscribe();
      this.studentForm.reset();
      this.router.navigate(['student/all']);
    } else {
      this.validateAllFormFields(this.studentForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      this.validateAllFormFields(control);
    }
  });
}

}
