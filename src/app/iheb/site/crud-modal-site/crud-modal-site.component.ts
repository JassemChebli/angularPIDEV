import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crud-modal',
  templateUrl: './crud-modal-site.component.html',
  styleUrls: ['./crud-modal-site.component.scss']
})
export class CrudModalSiteComponent implements OnInit {

  ModalTitle = '';
  @Input() id: number;
  @Input() data: {};
  myForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
  ) {

  }

  ngOnInit() {
    this.buildItemForm(this.data);
    if (this.id === 0) {
      this.ModalTitle = 'Add Site';
    } else {
      this.ModalTitle = 'Edit Site';
    }
  }

  private buildItemForm(item) {
    this.myForm = this.formBuilder.group({
      nom: [item.nom || '', Validators.required],
      address: [item.address || '', Validators.required],
      dateOfSessionStarts: [item.dateOfSessionStarts || new Date(), Validators.required],
      dateOfSessionEnds: [item.dateOfSessionEnds  || new Date(),  Validators.required],
    });
  }
  submitForm() {
    this.activeModal.close(this.myForm.value);
  }

}
