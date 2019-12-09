import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.scss']
})
export class GradeComponent implements OnInit {

  ModalTitle = '';
  @Input() id: number;
  @Input() data: {};
  myForm: FormGroup;
  constructor(public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder) { }

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

      grade: [item.grade || '', Validators.required],
     
      
    });
  }
  submitForm() {
    this.activeModal.close(this.myForm.value);
  }

}
