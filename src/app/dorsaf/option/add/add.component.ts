import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestApiService } from '../rest-api.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  constructor(private router: Router,private route: ActivatedRoute,private api: RestApiService) { }
  deps = [{id:1,nameDep:"info"},{id:2,nameDep:"twin"}];
  departement: any=null;
  optionForm = new FormGroup({
    label: new FormControl('', Validators.required),
    responsibleName: new FormControl('', Validators.required),
    responsibleEmail: new FormControl('', Validators.required),
    responsibleTel: new FormControl('', Validators.required),
  
  });

  ngOnInit() {
  }

  onSubmit() {
    
    console.log(this.optionForm.value);
    this.api.createOption(this.optionForm.value).subscribe();
    this.optionForm.reset();
    this.router.navigate(['option/all']);
  }
  
 
}
