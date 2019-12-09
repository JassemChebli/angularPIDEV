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
  idp: number;
  ids: number;
  constructor(private apirest: RestApiService, private route: AuthService) { }

  ngOnInit() {
    this.ids = this.route.getToken()['student'];
    this.idp = this.route.getToken()['project'];
    this.loadProject();
  }

  loadProject () {
    this.apirest.getProject(this.idp).subscribe((data) => {
     this.project = data;
   })
  }

  cancel () {
    this.apirest.cancelProject( {id: this.ids, pfeFile: {id: this.idp}}).subscribe();
  }

}
