import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HeadDepartment} from '../../../../Models/HeadDepartment';
import {RestApiService} from '../../../rest-api.service';
import {Site} from '../../../../Models/Site';
import {AuthService} from '../../../../../shared/auth/auth.service';

@Component({
    selector: 'app-add-dep-modal',
    templateUrl: './crud-add-dep.component.html',
    styleUrls: ['./crud-add-dep.component.scss']
})
export class CrudAddDepComponent implements OnInit {

    ModalTitle = '';
    heads : HeadDepartment[];
    sites : Site[];

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
        this.buildItemForm();
        this.ModalTitle = 'Add Department';
    }

    private buildItemForm() {
        this.myForm = this.formBuilder.group({
            label: ['', Validators.required],
            site: ['', Validators.required],
            head: ['', Validators.required],
        });
    }
    submitForm() {
        this.activeModal.close(this.myForm.value);
    }

}
