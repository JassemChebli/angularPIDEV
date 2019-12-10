import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  project: any;
  constructor(private route: ActivatedRoute, private api: RestApiService, private router: Router) { }

  ngOnInit() {
    this.loadProject();
  }

  loadProject() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if ( id != null) {
        this.api.getProject(id).subscribe((data) => {
          this.project = data;
        });
      }else {
        alert('Item not found!!');
      }
    });
  }
  // Deny a GP
  deny(id: number) {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
    }).queue([
      {
        title: 'Denial Reason',
        text: 'Please give you reason for this action delow:'
      }
    ]).then((result) => {
      if (result.value) {
        const message: string = result.value.toString();
        Swal.queue([{
          title: 'Graduation Project Denial',
          confirmButtonText: 'Send E-mail',
          text:
            'Email Content: ' + message,
          showLoaderOnConfirm: true,
          preConfirm: () => {
            if(message != '') {
              this.api.denyProject({id: id, message: message}).subscribe();
              Swal.insertQueueStep({
                icon: 'success',
                title: 'Graduation Project declined Succefully',
                timer: 3000,
                timerProgressBar: true,
              })
              setTimeout(() => {this.router.navigate(['pfe/all'])}, 3000);
            }else {
              Swal.insertQueueStep({
                icon: 'error',
                title: 'Empty emails can not be sent!'
              })
            }
          }
        }])
      }
    })
  }

  // Aprove a GP project

  approve(id: number) {
    this.api.approveProject(id).subscribe();
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
      title: 'Project approcved'
    })
    setTimeout(() => {this.router.navigate(['pfe/all'])}, 300);
  }
}
