import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PfeFile } from 'app/modals/PfeFile';

@Component({
  selector: 'app-crud-modal',
  templateUrl: './crud-modal.component.html',
  styleUrls: ['./crud-modal.component.scss']
})
export class CrudModalChangeValidationComponent implements OnInit{

  ModalTitle = '';
  @Input() id: number;
  @Input() data: {};
  myForm: FormGroup;
  pfe = new PfeFile;
  constructor(
   public activeModal: NgbActiveModal,
   private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.buildItemForm(this.data);
    if (this.id === 0) {
      this.ModalTitle = 'Add Task';
    }
    else {
      this.ModalTitle = 'Edit Task';
    }
  }

  private buildItemForm(item) {
    this.pfe=item;
    this.myForm = this.formBuilder.group({
      title: [item.title || '', Validators.required],
      description: [item.description || ''],
      problematic: [item.problematic || ''],
      functionnalities: [item.functionnalities || ''],
      keywords: [item.keywords || ''],
      emailPersonel: [item.emailPersonel || ''],
      emailProfessionel: [item.emailProfessionel || ''],




    });
  }
  submitForm() {
    this.activeModal.close(this.myForm.value);
  }

}

