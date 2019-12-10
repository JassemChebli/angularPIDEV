import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  directors = [];
  constructor(private api: RestApiService) { }

  ngOnInit() {
    this.loadDirectors();
  }

  loadDirectors() {
    this.api.getDirectors().subscribe((data) => {
      this.directors = data;
    })
  }

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
        this.api.deleteDirector(id).subscribe();
        Swal.fire(
          'Deleted!',
          'Your director record has been deleted.',
          'success'
        )
        setTimeout( () => {this.loadDirectors()}, 5);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'The director record is safe :)',
          'error'
        )
      }
    })
  }
}
