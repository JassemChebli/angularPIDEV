import {Component, OnInit} from '@angular/core';
import {RestApiService} from '../rest-api.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmationDialogSiteService} from './crud-modal-site/confirmation-dialog-site/confirmation-dialog-site.service';
import {Site} from '../../Models/Site';
import {AuthService} from '../../../shared/auth/auth.service';
import {CrudAddSiteComponent} from './crud-modal-site/modal-add-site/crud-add-site.component';
import {School} from '../../Models/School';
import {HeadDepartment} from '../../Models/HeadDepartment';
import {CrudUpdateSiteComponent} from './crud-modal-site/modal-update-site/crud-update-site.component';

@Component({
    selector: 'app-sites',
    templateUrl: './sites.component.html',
    styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {

    sites: Site[] = [];
    searched: Site[] = [];
    searching = false;
    keyword: string;
    school = new School();


    constructor(
        public restApi: RestApiService,
        private modalService: NgbModal,
        private confirmationDialogService: ConfirmationDialogSiteService,
        private auth: AuthService
    ) {
    }

    ngOnInit() {
        this.loadSchool(this.auth.getToken()['email']);
        this.loadAll();
    }

    loadSchool(id: any) {
        return this.restApi.getSchoolByAdmin(id).subscribe((data) => {
            this.school = data;
        })
    }

    searchSites() {
        if (this.keyword != null && this.keyword != '') {
            this.searching = true;
            this.searched = this.sites.filter(x => x.nom.toUpperCase().includes(this.keyword.toUpperCase()));
        } else {
            this.searching = false;
            this.loadAll();
        }
    }

    loadAll() {
        return this.restApi.getMySites(this.auth.getToken()['email']).subscribe((data) => {
            this.sites = data;
        })
    }

    editSite(id: number) {
        let site = new Site();
        site = this.sites.find(x => x.id === id);
        const modalRef = this.modalService.open(CrudUpdateSiteComponent);
        modalRef.componentInstance.id = id; // should be the id
        modalRef.componentInstance.head = site.internshipDirector;
        modalRef.componentInstance.data = {
            nom: site.nom,
            address: site.address,
            dateOfSessionStarts: site.dateOfSessionStarts,
            dateOfSessionEnds: site.dateOfSessionEnds,
            head: site.internshipDirector.id
        }; // should be the data

        modalRef.result.then((result) => {
            site.nom = result.nom;
            site.address = result.address;
            site.dateOfSessionStarts = result.dateOfSessionStarts;
            site.dateOfSessionEnds = result.dateOfSessionEnds;
            let head = new HeadDepartment();
            head.id = result.head;
            site.internshipDirector = head;
            this.restApi.updateSite(site).subscribe(data => {
                    this.loadAll();
                },
                error => {
                    console.error(error);
                });

        }).catch((error: ExceptionInformation) => {
            console.error(error.domain);
        });

    }

    deleteSite(id: number) {
        this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this site ?')
            .then((confirmed) => {
                if (confirmed) {
                    this.restApi.deleteSite(id).subscribe();
                }
            })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

    }

    addSite() {
        const modalRef = this.modalService.open(CrudAddSiteComponent);
        modalRef.componentInstance.school = this.school;

        modalRef.result.then((result) => {
            let site = new Site();
            site.nom = result.nom;
            site.address = result.address;
            site.dateOfSessionStarts = result.dateOfSessionStarts;
            site.dateOfSessionEnds = result.dateOfSessionEnds;
            site.school = this.school;
            let head = new HeadDepartment();
            head.id = result.head;
            site.internshipDirector = head;
            console.log(site);
            this.restApi.addSite(site).subscribe(data => {
                this.loadAll()
            });
        }).catch((error) => {
            console.error(error);
        });

    }
}
