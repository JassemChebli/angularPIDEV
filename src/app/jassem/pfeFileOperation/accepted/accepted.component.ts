import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-accepted',
  templateUrl: './accepted.component.html',
  styleUrls: ['./accepted.component.scss']
})
export class AcceptedComponent implements OnInit {

  accepted: any = [];
  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadAccepted()
  }

  loadAccepted() {
    return this.restApi.getAccepted().subscribe((data: {}) => {
      this.accepted = data;
    })
  }

}
