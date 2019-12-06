import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  student: any;
  classes = [];
  studentForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    tel: new FormControl(''),
    status: new FormControl('false'),
    birthDate: new FormControl(''),
    classe: new FormGroup({
      id: new FormControl(''),
    })
  });
  constructor(private router: Router,private route: ActivatedRoute, private api: RestApiService) { }

  ngOnInit() {
    this.loadStudent();
    this.loadClasses();
  }

  loadStudent() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if ( id != null) {
        this.api.getStudent(id).subscribe((data) => {
          this.student = data;
          this.studentForm.get('id').setValue(this.student.id.toString());
          this.studentForm.get('firstName').setValue(this.student.firstName);
          this.studentForm.get('lastName').setValue(this.student.lastName);
          this.studentForm.get('email').setValue(this.student.email);
          this.studentForm.get('birthDate').setValue(this.student.birthDate);
          this.studentForm.get('tel').setValue(this.student.tel);
          this.studentForm.get('status').setValue(this.student.status.toString());
          this.studentForm.get('classe').get('id').setValue(this.student.classe.id);
      })
      }else {
        alert('Item not found!!');
      }
    });
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

  onSubmit() {
    this.api.updateStudent(this.studentForm.value).subscribe();
    this.studentForm.reset();
    this.router.navigate(['student/all']);
  }

}
