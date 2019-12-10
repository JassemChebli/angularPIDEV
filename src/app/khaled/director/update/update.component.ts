import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestApiService } from '../rest-api.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  
  director: any;
  dirForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });
  constructor(private router: Router,private route: ActivatedRoute, private api: RestApiService) { }

  ngOnInit() {
    this.loadDirector();
  }

  loadDirector() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if ( id != null) {
        this.api.getDirector(id).subscribe((data) => {
          this.director = data;
          this.dirForm.get('id').setValue(this.director.id.toString());
          this.dirForm.get('firstName').setValue(this.director.firstName);
          this.dirForm.get('lastName').setValue(this.director.lastName);
          this.dirForm.get('email').setValue(this.director.email);
      })
      }else {
        alert('Item not found!!');
      }
    });
  }

  onSubmit() {
    this.api.updateDirector(this.dirForm.value).subscribe();
    this.dirForm.reset();
    this.router.navigate(['director/all']);
  }

}
