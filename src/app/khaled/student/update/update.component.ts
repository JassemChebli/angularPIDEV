import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../../shared/auth/auth.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  student: any;
  classes = [];
  style: string;
  studentForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    tel: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(11), Validators.pattern('[0-9]+')]),
    status: new FormControl('false'),
    sexe: new FormControl('Female'),
    birthDate: new FormControl('', [Validators.required]),
    classe: new FormGroup({
      id: new FormControl('', [Validators.required]),
    })
  });
  constructor(private router: Router, private route: ActivatedRoute, private api: RestApiService, private auth: AuthService) { }
  // tslint:disable-next-line: member-ordering
  role = this.auth.getToken()['role'];

  ngOnInit() {
    this.loadStudent();
    this.loadClasses();
    if (this.role === 'admin') {this.style = 'last';}
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
          this.studentForm.get('password').setValue(this.student.password);
          this.studentForm.get('birthDate').setValue(this.student.birthDate);
          this.studentForm.get('tel').setValue(this.student.tel);
          this.studentForm.get('sexe').setValue(this.student.sexe);
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
    if (this.studentForm.valid) {
      this.api.updateStudent(this.studentForm.value).subscribe();
      this.studentForm.reset();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Updated successfully'
      })
      this.router.navigate(['student/all']);
    }else {
      this.validateAllFormFields(this.studentForm);
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'error',
        title: 'Please verify the form'
      })
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
