import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestApiService } from '../rest-api.service'
import { AuthService } from 'app/shared/auth/auth.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  classes = [];
  classe: any;
  style: string;
  studentForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    tel: new FormControl(''),
    status: new FormControl('false'),
    birthDate: new FormControl(''),
    classe: new FormGroup({
      id: new FormControl(''),
    })
  });

  constructor(private api: RestApiService, private auth: AuthService) { }
  // tslint:disable-next-line: member-ordering
  role = this.auth.getToken()['role'];

  ngOnInit() {
    this.loadClasses();
    if (this.role === 'admin') {this.style = 'last';}
  }

  loadClasses() {
    this.api.getClasses().subscribe((data) => {
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
    this.api.createEmployee(this.studentForm.value).subscribe();
    this.studentForm.reset();
  }

}
