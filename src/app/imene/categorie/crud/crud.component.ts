
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  ModalTitle = '';
  @Input() id: number;
  @Input() data: {};
  myForm: FormGroup;
  constructor(public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.buildItemForm(this.data);
    if (this.id === 0) {
      this.ModalTitle = 'Add Categorie';
    } else {
      this.ModalTitle = 'Edit Categorie';
    }
    
  }

  private buildItemForm(item) {
    this.myForm = this.formBuilder.group({
      nom: [item.label || '', Validators.required],
      address: [item.status || '', Validators.required],
      
    });
  }
  submitForm() {
    this.activeModal.close(this.myForm.value);
  }

}
