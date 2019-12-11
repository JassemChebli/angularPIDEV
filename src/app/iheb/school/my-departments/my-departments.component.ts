import { Component, OnInit } from '@angular/core';
import {Departement} from '../../Models/Departement';
import {RestApiService} from '../rest-api.service';
import {AuthService} from '../../../shared/auth/auth.service';

@Component({
  selector: 'app-my-departments',
  templateUrl: './my-departments.component.html',
  styleUrls: ['./my-departments.component.scss']
})
export class MyDepartmentsComponent implements OnInit {

  deps : Departement[];

  constructor(
      public restApi: RestApiService,
      private auth: AuthService,
  ) { }

  ngOnInit() {
    this.load();
  }

  load() {
    return this.restApi.getDepbydirector(this.auth.getToken()['email']).subscribe((data) => {
      this.deps = data;
    })
  }

}
