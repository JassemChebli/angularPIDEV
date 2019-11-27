import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  all: any = [];
  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadAll()
  }
  loadAll() {
    return this.restApi.getAll().subscribe((data: {}) => {
      this.all = data;
    })
  }

}
