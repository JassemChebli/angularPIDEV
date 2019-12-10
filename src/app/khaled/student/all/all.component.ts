import { Component, OnInit } from '@angular/core';
import { RestApiService } from './../rest-api.service';
import Swal from 'sweetalert2';
import { AuthService } from 'app/shared/auth/auth.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
 

  students = [];
  items = [];

  constructor(private api: RestApiService, private auth: AuthService) { }
  // tslint:disable-next-line: member-ordering
  role = this.auth.getToken()['role'];
  ngOnInit() {
    this.loadStudents();
  }

  // Delete item

  delete (id: number) {
    // const clicked = confirm('Would you delete the record for ' + id);
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.api.deleteStudent(id).subscribe();
        Swal.fire(
          'Deleted!',
          'Your student record has been deleted.',
          'success'
        )
        setTimeout( () => {this.loadStudents()}, 10);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'The student record is safe :)',
          'error'
        )
      }
    })
  }

  // Fetch Data
  loadStudents() {
    this.api.getStudents().subscribe((data) => {
      this.students = data;
    })
  }

  // Search by Years 

  onItemAdded(event) {
    console.log(this.items)
    this.api.getStudentsByYears(this.items).subscribe((data)=>{
      this.students = data;
    })
  }

  onItemRemoved() {
    console.log(this.items.length)
    if ( Array.isArray(this.items) && this.items.length ) {
      this.api.getStudentsByYears(this.items).subscribe( (data) => {
        this.students = data;
      })
    }else {
      this.loadStudents();
    }
  }


}
