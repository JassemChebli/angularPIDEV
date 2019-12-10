import {Component, OnInit} from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {School} from '../../Models/School';
import {ConfirmationDialogService} from '../crud-modal/confirmation-dialog/confirmation-dialog.service';
import {Admin} from '../../Models/Admin';
import {CrudAddComponent} from '../crud-modal/modal-add/crud-add.component';
import {CrudUpdateComponent} from '../crud-modal/modal-update/crud-update.component';
import {AuthService} from '../../../shared/auth/auth.service';

@Component({
    selector: 'app-all',
    templateUrl: './all.component.html',
    styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

    all: School[] = [];
    searched: School[] = [];
    searching = false;
    private router: Router;
    keyword: string;

    constructor(
        public restApi: RestApiService,
        private modalService: NgbModal,
        private confirmationDialogService: ConfirmationDialogService,
        private auth: AuthService
    ) {
    }

    ngOnInit() {
        this.loadAll();
    }

    loadAll() {
        return this.restApi.getAll().subscribe((data) => {
            this.all = data;
        })
    }

    addSchool() {
        const modalRef = this.modalService.open(CrudAddComponent);
        modalRef.componentInstance.data = {name: '', address: '', slogon: '', email: '', tel: '', admin: ''}; // should be the data
        modalRef.result.then((result) => {
            let admin = new Admin();
            admin.id = result.admin;
            this.restApi.addSchool(result.name, result.address, result.slogon, result.email, result.tel, admin).subscribe(data => {
                this.loadAll();
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    editSchool(id: number) {
        let school = new School();
        school = this.all.find(x => x.id === id);
        const modalRef = this.modalService.open(CrudUpdateComponent);
        modalRef.componentInstance.admin = school.admin;
        modalRef.componentInstance.data = {
            name: school.name,
            address: school.address,
            slogon: school.slogon,
            email: school.email,
            tel: school.tel,
            admin: school.admin

        }; // should be the data

        modalRef.result.then((result) => {
            school.name = result.name;
            school.address = result.address;
            school.slogon = result.slogon;
            school.email = result.email;
            school.tel = result.tel;
            school.admin.id = result.admin;
            this.restApi.updateSchool(school).subscribe(data => {
                    this.loadAll();
                },
                error => {
                    alert(error);
                });

        }).catch((error: ExceptionInformation) => {
            console.log(error.domain);
        });
    }

    deleteSchool(id: number) {

        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this school ?')
            .then((confirmed) => {
                if (confirmed) {
                    this.restApi.deleteSchool(id).subscribe(data => {
                        this.loadAll();
                    })
                }
            })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }

    search() {
        if (this.keyword != null && this.keyword != '') {
            this.searching = true;
            this.searched = this.all.filter(x => x.name.toUpperCase().includes(this.keyword.toUpperCase()));
        } else {
            this.searching = false;
            this.loadAll();
        }
    }
}
