import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

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
    const clicked = confirm('Would you delete the record for ' + id);
    if ( clicked === true ) {
      this.api.deleteDirector(id).subscribe();
      setTimeout( () => {this.loadDirectors()}, 100);
    }else {
    }
  }
}
