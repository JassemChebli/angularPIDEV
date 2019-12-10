import {Component, Output, EventEmitter, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RestApiService} from '../../../rest-api.service';
import {School} from '../../../../Models/School';
import {HeadDepartment} from '../../../../Models/HeadDepartment';


@Component({
    selector: 'app-update-site-modal',
    templateUrl: './crud-update-site.component.html',
    styleUrls: ['./crud-update-site.component.scss']
})
export class CrudUpdateSiteComponent implements OnInit {

    ModalTitle = '';
    @Input() data: {};
    @Input() school: School;
    @Input() head : HeadDepartment;
    heads : HeadDepartment[];

    myForm: FormGroup;
    constructor(
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder,
        public restApi: RestApiService,
    ) {

    }

    loadHeads() {
        return this.restApi.getInternDir().subscribe((data) => {
            this.heads = data;
        })
    }

    ngOnInit() {
        this.loadHeads();
        this.buildItemForm(this.data);
        this.ModalTitle = 'Edit Site';
    }

    private buildItemForm(item) {
        this.myForm = this.formBuilder.group({
            nom: [item.nom, Validators.required],
            address: [ item.address, Validators.required],
            dateOfSessionStarts: [item.dateOfSessionStarts, Validators.required],
            dateOfSessionEnds: [item.dateOfSessionStarts,  Validators.required],
            head: [item.head, Validators.required]
        });
    }
    submitForm() {
        this.activeModal.close(this.myForm.value);
    }
}
