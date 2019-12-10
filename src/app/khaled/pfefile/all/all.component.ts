import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  items = [];
  projects = [];
  color: string;
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
}
