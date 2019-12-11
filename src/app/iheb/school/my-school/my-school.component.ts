import {Component, OnInit} from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {School} from '../../Models/School';
import {AuthService} from '../../../shared/auth/auth.service';
import {Site} from '../../Models/Site';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CrudUpdateMyschoolComponent} from './modal-update-myschool/crud-update-myschool.component';
import Swal from "sweetalert2";

@Component({
    selector: 'app-my-school',
    templateUrl: './my-school.component.html',
    styleUrls: ['./my-school.component.scss']
})
export class MySchoolComponent implements OnInit {

    school: School;
  sites: Site[] = [];

    constructor(
        public restApi: RestApiService,
        private auth: AuthService,
        private modalService: NgbModal,
    ) {
    }

    ngOnInit() {
      this.load(this.auth.getToken()['email']);
    }

    load(id: any) {
        return this.restApi.getSchoolByAdmin(id).subscribe((data) => {
            this.school = data;
        })
    }

  editSchool(id: number) {

    const modalRef = this.modalService.open(CrudUpdateMyschoolComponent);
    modalRef.componentInstance.data = {
      name: this.school.name,
      address: this.school.address,
      slogon: this.school.slogon,
      email: this.school.email,
      tel: this.school.tel,
    }; // should be the data

    modalRef.result.then((result) => {
      this.school.name = result.name;
      this.school.address = result.address;
      this.school.slogon = result.slogon;
      this.school.email = result.email;
      this.school.tel = result.tel;
      this.restApi.updateSchool(this.school).subscribe(data => {
        Swal.fire(
            'School',
            'Updated',
            'success'
        );
        //this.load(id);
      });

    }).catch((error) => {
      console.log(error);
    });

  }

}
