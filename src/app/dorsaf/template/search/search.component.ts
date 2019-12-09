import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import {DatePipe} from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})


export class SearchComponent implements OnInit {
  all: any=[];
  
  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadAll()
  }

  loadAll() {
    return this.restApi.getAllStudents().subscribe((data: {}) => {
      this.all = data;
    })
  }


  
}
