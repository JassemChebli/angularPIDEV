import {Component, Output, EventEmitter, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RestApiService} from '../../rest-api.service';


@Component({
    selector: 'app-update-myschool-modal',
    templateUrl: './crud-update-myschool.component.html',
    styleUrls: ['./crud-update-myschool.component.scss']
})
export class CrudUpdateMyschoolComponent implements OnInit {

    ModalTitle = '';
    @Input() data: {};
    myForm: FormGroup;


    constructor(
        public activeModal: NgbActiveModal,
        private formBuilder: FormBuilder,
        public restApi: RestApiService,
    ) {

    }


    ngOnInit() {
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
        });
    }

    submitForm() {
        this.activeModal.close(this.myForm.value);
    }

}
