import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {School} from '../../../../Models/School';
import {HeadDepartment} from '../../../../Models/HeadDepartment';
import {RestApiService} from '../../../rest-api.service';

@Component({
    selector: 'app-add-site-modal',
    templateUrl: './crud-add-site.component.html',
    styleUrls: ['./crud-add-site.component.scss']
})
export class CrudAddSiteComponent implements OnInit {

    ModalTitle = '';
    @Input() data: {};
    @Input() school: School;
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
        this.ModalTitle = 'Add Site to '+ this.school.name;
    }

    private buildItemForm(item) {
        this.myForm = this.formBuilder.group({
            nom: ['', Validators.required],
            address: [ '', Validators.required],
            dateOfSessionStarts: ['', Validators.required],
            dateOfSessionEnds: ['',  Validators.required],
            head: ['', Validators.required]
        });
    }
    submitForm() {
        this.activeModal.close(this.myForm.value);
    }

}
