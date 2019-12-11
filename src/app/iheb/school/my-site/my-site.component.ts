import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {AuthService} from '../../../shared/auth/auth.service';
import {Site} from '../../Models/Site';

@Component({
  selector: 'app-my-site',
  templateUrl: './my-site.component.html',
  styleUrls: ['./my-site.component.scss']
})
export class MySiteComponent implements OnInit {

  site: Site;

  constructor(
      public restApi: RestApiService,
      private auth: AuthService,
  ) { }

  ngOnInit() {
    this.load();
  }

  load() {
    return this.restApi.getsitebydirector(this.auth.getToken()['email']).subscribe((data) => {
      this.site = data;
    })
  }
}
