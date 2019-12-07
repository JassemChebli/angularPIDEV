import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  project: any;
  constructor(private route: ActivatedRoute, private api: RestApiService) { }

  ngOnInit() {
    this.loadProject();
  }

  loadProject() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if ( id != null) {
        this.api.getProject(id).subscribe((data) => {
          this.project = data;
        });
      }else {
        alert('Item not found!!');
      }
    });
  }
}
