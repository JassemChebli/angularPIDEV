import { Component, OnInit } from '@angular/core';
import { RestApiService } from './../rest-api.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  students = [];

  constructor(private api: RestApiService) { }

  ngOnInit() {
    this.loadStudents();
  }

  delete (id: number) {
    const clicked = confirm('Would you delete the record for ' + id);
    if ( clicked === true ) {
      this.api.deleteStudent(id).subscribe();
      setTimeout( () => {this.loadStudents()}, 100);
    }else {
    }
  }

  loadStudents() {
    this.api.getStudents().subscribe((data) => {
      this.students = data;
    })
  }

}
