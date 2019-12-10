import {Component, Output, EventEmitter, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RestApiService} from '../../../rest-api.service';
import {School} from '../../../../Models/School';
import {HeadDepartment} from '../../../../Models/HeadDepartment';
import {Site} from '../../../../Models/Site';
import {AuthService} from '../../../../../shared/auth/auth.service';


@Component({
    selector: 'app-update-dep-modal',
    templateUrl: './crud-update-dep.component.html',
    styleUrls: ['./crud-update-dep.component.scss']
})
export class CrudUpdateDepComponent implements OnInit {

    @Input() data: {};
    ModalTitle = '';
    heads : HeadDepartment[];
    sites : Site[];
    @Input() head : HeadDepartment;

    myForm: FormGroup;
    constructor(
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder,
        public restApi: RestApiService,
        private auth: AuthService
    ) {

    }


    loadHeads() {
        return this.restApi.getHeads().subscribe((data) => {
            this.heads = data;
        })
    }

    loadSites() {
        return this.restApi.getMySites(this.auth.getToken()['email']).subscribe((data) => {
            this.sites = data;
        })
    }

    ngOnInit() {
        this.loadHeads();
        this.loadSites();
        this.buildItemForm(this.data);
        this.ModalTitle = 'Add Department';
    }

    private buildItemForm(item) {
        this.myForm = this.formBuilder.group({
            label: [item.label, Validators.required],
            site: [item.site , Validators.required],
            head: [item.head, Validators.required]
        });
    }
    submitForm() {
        this.activeModal.close(this.myForm.value);
    }
}
