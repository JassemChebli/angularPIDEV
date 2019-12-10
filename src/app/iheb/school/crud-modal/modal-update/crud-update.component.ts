import {Component, Output, EventEmitter, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Admin} from '../../../Models/Admin';
import {RestApiService} from '../../rest-api.service';


@Component({
    selector: 'app-update-modal',
    templateUrl: './crud-update.component.html',
    styleUrls: ['./crud-update.component.scss']
})
export class CrudUpdateComponent implements OnInit {

    ModalTitle = '';
    @Input() data: {};
    myForm: FormGroup;
    admins: Admin[];
    @Input() admin: any;


    constructor(
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder,
        public restApi: RestApiService,
    ) {

    }

    loadAllAdmins() {
        return this.restApi.getAdmins().subscribe((data) => {
            this.admins = data;
        })
    }

    ngOnInit() {
        this.loadAllAdmins();
        this.buildItemForm(this.data);
        this.ModalTitle = 'Edit School';
    }

    private buildItemForm(item) {
        this.myForm = this.formBuilder.group({
            name: [item.name || '', Validators.required],
            address: [item.address || '', Validators.required],
            slogon: [item.slogon || '', Validators.required],
            email: [item.email || '', [Validators.required, Validators.email]],
            tel: [item.tel || '', Validators.required],
            admin: [item.admin || '', Validators.required]
        });
    }

    submitForm() {
        this.activeModal.close(this.myForm.value);
    }

}
