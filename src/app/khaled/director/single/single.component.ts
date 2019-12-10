import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  director: any;
  constructor(private route: ActivatedRoute, private api: RestApiService) { }

  ngOnInit() {
    this.loadDirector();
  }

  loadDirector() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if ( id != null) {
        this.api.getDirector(id).subscribe((data) => {
          this.director = data;
        });
      }else {
        alert('Item not found!!');
      }
    });
  }

}
