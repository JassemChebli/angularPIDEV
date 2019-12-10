import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestApiService } from '../rest-api.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  director: any;
  dirForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]),
    address: new FormControl('', Validators.required),
    username: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  constructor(private router: Router,private route: ActivatedRoute, private api: RestApiService) { }

  ngOnInit() {
    this.loadDirector();
  }

  loadDirector() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if ( id != null) {
        this.api.getDirector(id).subscribe((data) => {
          this.director = data;
          this.dirForm.get('id').setValue(this.director.id.toString());
          this.dirForm.get('firstName').setValue(this.director.firstName);
          this.dirForm.get('lastName').setValue(this.director.lastName);
          this.dirForm.get('email').setValue(this.director.email);
          this.dirForm.get('address').setValue(this.director.address);
          this.dirForm.get('username').setValue(this.director.username);
          this.dirForm.get('password').setValue(this.director.password);
      })
      }else {
        alert('Item not found!!');
      }
    });
  }

  onSubmit() {
    if (this.dirForm.valid) {
      this.api.updateDirector(this.dirForm.value).subscribe();
      this.dirForm.reset();
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
      this.router.navigate(['director/all']);
    } else {
      this.validateAllFormFields(this.dirForm);
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
