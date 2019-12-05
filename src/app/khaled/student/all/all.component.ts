import { Component, OnInit } from '@angular/core';
import { RestApiService } from './../rest-api.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
 

  students = [];
  items = [];

  constructor(private api: RestApiService) { }

  ngOnInit() {
    this.loadStudents();
  }

  // Delete item 

  delete (id: number) {
    const clicked = confirm('Would you delete the record for ' + id);
    if ( clicked === true ) {
      this.api.deleteStudent(id).subscribe();
      setTimeout( () => {this.loadStudents()}, 100);
    }else {
    }
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
      console.log(data)
      this.students = data;
    })
  }

  onItemRemoved() {
    console.log(this.items.length)
    if ( Array.isArray(this.items) && this.items.length ) {
      this.api.getStudentsByYears(this.items).subscribe((data)=>{
        console.log(data)
        this.students = data;
      })
    }else {
      this.loadStudents();
    }
  }


}
