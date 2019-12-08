import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'app/khaled/pfefile/rest-api.service';
import { AuthService } from '../../../shared/auth/auth.service'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project: any;
  constructor(private apirest: RestApiService, private route: AuthService) { }

  ngOnInit() {
    this.loadProject();
  }

  loadProject () {
   this.apirest.getProject(this.route.getToken()['project']).subscribe((data) => {
     this.project = data;
   })
  }

}
