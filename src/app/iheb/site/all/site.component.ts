import {Component, OnInit} from '@angular/core';
import {Site} from '../../Models/Site';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CrudModalSiteComponent} from '../crud-modal-site/crud-modal-site.component';
import {RestApiService} from '../../rest-api.service';
import {ConfirmationDialogSiteService} from '../crud-modal-site/confirmation-dialog-site/confirmation-dialog-site.service';

@Component({
    selector: 'app-site',
    templateUrl: './all.component.html',
    styleUrls: ['./all.component.scss']
})
export class SiteComponent implements OnInit {

    sites: Site[] = [];
    searched: Site[] = [];
    searching = false;
    keyword: string;


    constructor(
        public restApi: RestApiService,
        private modalService: NgbModal,
        private confirmationDialogService: ConfirmationDialogSiteService,
    ) {
    }

    ngOnInit() {
        this.loadAll();
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
        return this.restApi.getAllSites().subscribe((data) => {
            this.sites = data;
        })
    }

    addSite() {
        const modalRef = this.modalService.open(CrudModalSiteComponent);
        modalRef.componentInstance.id = 0; // should be the id
        modalRef.componentInstance.data = {nom: '', address: '', dateOfSessionStarts: '', dateOfSessionEnds: ''}; // should be the data

        modalRef.result.then((result) => {
            this.restApi.addSite(result.nom, result.address, result.dateOfSessionStarts, result.dateOfSessionEnds).subscribe(data => {
                this.loadAll();
            });
        }).catch((error) => {
            console.error(error);
        });

    }

    editSite(id: number) {
        let site = new Site();
        site = this.sites.find(x => x.id === id);
        const modalRef = this.modalService.open(CrudModalSiteComponent);
        modalRef.componentInstance.id = id; // should be the id
        modalRef.componentInstance.data = {
            nom: site.nom,
            address: site.address,
            dateOfSessionStarts: site.dateOfSessionStarts,
            dateOfSessionEnds: site.dateOfSessionEnds,
        }; // should be the data

        modalRef.result.then((result) => {
            site.nom = result.nom;
            site.address = result.address;
            site.dateOfSessionStarts = result.dateOfSessionStarts;
            site.dateOfSessionEnds = result.dateOfSessionEnds;
            site.nbrMaxEnc = -1;
            site.nbrMaxPres = -1;
            site.nbrMaxSup = -1;
            site.nbrMaxVal = -1;
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
                    this.restApi.deleteSite(id).subscribe(data => {
                        this.loadAll();
                    })
                }
            })
            .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

    }

}
