import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Input() requestDetails = {description: ''} ;
  constructor(public restApi: RestApiService,
    public router: Router) { }

  ngOnInit() {
  }


  addRequest(dataEmployee) {
    this.restApi.createEmployee(this.requestDetails).subscribe((data: {}) => {
      // this.router.navigate(['/employees-list'])
    })
  }
}
