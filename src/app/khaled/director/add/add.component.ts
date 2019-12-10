import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  sites = [];
  dirForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    site: new FormGroup({
      id: new FormControl(''),
    }),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private api: RestApiService) { }

  ngOnInit() {
    this.loadSites();
  }

  onSubmit() {
    console.log(this.dirForm.value)
    this.api.createDirector(this.dirForm.value).subscribe();
    this.dirForm.reset();
  }

  loadSites() {
    this.api.getSites().subscribe((data) => {
      data.forEach(element => {
        if (!element.internshipDirector) {
          this.sites.push(element);
        }
      });
      console.log(data)
    });
  }

}
