import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'app/khaled/pfefile/rest-api.service';
import { AuthService } from '../../../shared/auth/auth.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project: any;
  idp: number;
  ids: number;
  color1: string;
  color2: string;

  constructor(private apirest: RestApiService, private route: AuthService) { }

  ngOnInit() {
    this.ids = this.route.getToken()['student'];
    this.idp = this.route.getToken()['project'];
    this.loadProject();
  }

  loadProject () {
    this.apirest.getProject(this.idp).subscribe((data) => {
    this.project = data;
    if (data.annulation === 'Pending') {
      this.color1 = '#FFC96C';
    }else if (data.annulation === 'Declined') {
      this.color1 = '#FF6565';
    }else if (data.annulation === 'Approved') {
      this.color1 = '#52E5BA';
    }
    if (data.status === false) {
      this.color2 = '#FFC96C';
    }else {
      this.color2 = '#52E5BA';
    }
   })
  }

  cancel () {
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
        this.apirest.cancelProject( {id: this.ids, pfeFile: {id: this.idp}}).subscribe();
        Swal.fire(
          'Confirmed!',
          'Your demande is listed and will be treated as soon as possible.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'The project is safe :)',
          'error'
        )
      }
    })

  }


}
