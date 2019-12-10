import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  student: any;
  constructor(private route: ActivatedRoute, private api: RestApiService) { }

  ngOnInit() {
    this.loadStudent();
  }

  loadStudent() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if ( id != null) {
        this.api.getStudent(id).subscribe((data) => {
          this.student = data;
        });
      }else {
        alert('Item not found!!');
      }
    });
  }

}
