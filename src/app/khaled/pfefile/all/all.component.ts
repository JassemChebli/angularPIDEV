import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  items = [];
  projects = [];
  constructor( private api: RestApiService) { }

  ngOnInit() {
    this.loadProjects();
  }

  // Fetch Data
  loadProjects() {
    this.api.getProjects().subscribe((data) => {
      this.projects = data;
    })
  }

  nonTreated() {
    this.api.getNonTreateds().subscribe((data) => {
      this.projects = data;
    })
  }

  // Search by Years 

  onItemAdded(event) {
    console.log(this.items)
    this.api.getFiltredProjects(this.items).subscribe((data)=>{
      this.projects = data;
    })
  }

  onItemRemoved() {
    console.log(this.items.length)
    if ( Array.isArray(this.items) && this.items.length ) {
      this.api.getFiltredProjects(this.items).subscribe((data)=>{
        this.projects = data;
      })
    }else {
      this.loadProjects();
    }
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
                title: 'Graduation Project declined Succefully'
              })
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
  }

}
