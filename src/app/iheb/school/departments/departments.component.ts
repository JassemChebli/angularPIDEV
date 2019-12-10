import { Component, OnInit } from '@angular/core';
import {Departement} from '../../Models/Departement';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from '../../../shared/auth/auth.service';
import {RestApiService} from '../rest-api.service';
import {CrudAddSiteComponent} from '../sites/crud-modal-site/modal-add-site/crud-add-site.component';
import {CrudAddDepComponent} from './crud-modal-dep/modal-add-dep/crud-add-dep.component';
import {Site} from '../../Models/Site';
import {HeadDepartment} from '../../Models/HeadDepartment';
import {DepartmentHead} from '../../Models/DepartmentHead';
import {CrudUpdateSiteComponent} from '../sites/crud-modal-site/modal-update-site/crud-update-site.component';
import {CrudUpdateDepComponent} from './crud-modal-dep/modal-update-dep/crud-update-dep.component';
import {ConfirmationDialogSiteService} from '../sites/crud-modal-site/confirmation-dialog-site/confirmation-dialog-site.service';
import {ConfirmationDialogDepService} from './crud-modal-dep/confirmation-dialog-dep/confirmation-dialog-dep.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  depatments: Departement[] = [];
  searched: Departement[] = [];
  searching= false;
  keyword: string;

  constructor(
      public restApi: RestApiService,
      private modalService: NgbModal,
      private auth: AuthService,
      private confirmationDialogService: ConfirmationDialogDepService
  ) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    return this.restApi.getMyDepartments(this.auth.getToken()['email']).subscribe((data) => {
      this.depatments = data;
    })
  }

  searchDepatments() {
    if (this.keyword != null && this.keyword != '') {
      this.searching = true;
      this.searched = this.depatments.filter(x => x.label.toUpperCase().includes(this.keyword.toUpperCase()));
    } else {
      this.searching = false;
      this.loadAll();
    }
    
  }

  addDepatment() {
    const modalRef = this.modalService.open(CrudAddDepComponent);
    modalRef.result.then((result) => {
      let dep = new Departement();
      dep.label = result.label;
      let site = new Site();
      site.id= result.site;
      dep.site=site;
      let dh = new DepartmentHead();
      dh.id=result.head;
      dep.departementHead=dh;
      console.log(dep);
      this.restApi.addDepartment(dep).subscribe(data => {
        this.loadAll()
      });
    }).catch((error) => {
      console.error(error);
    });
    
  }

  editDepatment(id: number) {
    let depar = new Departement();
    depar = this.depatments.find(x => x.id === id);
    const modalRef = this.modalService.open(CrudUpdateDepComponent);
    modalRef.componentInstance.head = depar.departementHead;
    modalRef.componentInstance.data = {
      label: depar.label,
      site: depar.site.id,
      head: depar.departementHead.id
    }; // should be the data

    modalRef.result.then((result) => {
      depar.label = result.label;
      let site = new Site();
      site.id= result.site;
      depar.site=site;
      let dh = new DepartmentHead();
      dh.id=result.head;
      depar.departementHead=dh;
      this.restApi.updateDep(depar).subscribe(data => {
            this.loadAll();
          },
          error => {
            console.error(error);
          });

    }).catch((error: ExceptionInformation) => {
      console.error(error.domain);
    });
    
  }

  deleteDepatment(id: any) {

    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this department ?')
        .then((confirmed) => {
          if (confirmed) {
            this.restApi.deleteDep(id).subscribe();
          }
        })
        .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));


  }
}
