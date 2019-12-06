import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  c:any;
  constructor(private route: ActivatedRoute,public restApi: RestApiService) { }

  ngOnInit() {
    this.loadbyId();
  }
  loadbyId() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if ( id != null) {
        this.restApi.get(id).subscribe((data) => {
          this.c = data;
        });
      }else {
        alert(' not found!!');
      }
    });
  }
}
