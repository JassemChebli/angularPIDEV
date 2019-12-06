import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
 
  dirForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });
  constructor(private api: RestApiService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.api.createDirector(this.dirForm.value).subscribe();
    this.dirForm.reset();
  }
}
