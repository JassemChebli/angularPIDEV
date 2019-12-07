import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  all: any = [];

  constructor(public restApi: RestApiService, private modalService: NgbModal) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    return this.restApi.getAll().subscribe((data: {}) => {
      this.all = data;
    })
  }

  delete(id: number) {
    const clicked = confirm('Are you sure that you want to delete this option for ');
    if (clicked === true) {

      this.restApi.deleteOption(id).subscribe();
      setTimeout(() => { this.loadAll() }, 100);
    }


  }


  

}
