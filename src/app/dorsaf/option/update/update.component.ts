import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,private api: RestApiService) { }
  deps = [{id:1,nameDep:"info"},{id:2,nameDep:"twin"}];
  departement: any=null;
  optionForm = new FormGroup({
    id: new FormControl(),
    label: new FormControl('', Validators.required),
    responsibleName: new FormControl('', Validators.required),
    responsibleEmail: new FormControl('', Validators.required),
    responsibleTel: new FormControl('', Validators.required),
  
  });
     option:any
  

  ngOnInit() {
    this.loadOption();
  }
  loadOption() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if ( id != null) {
        this.api.getoptionById(id).subscribe((data) => {
          this.option = data;
          console.log(this.option)
          this.optionForm.get('id').setValue(id.toString());
          this.optionForm.get('label').setValue(this.option.label);
          this.optionForm.get('responsibleName').setValue(this.option.responsibleName);
          this.optionForm.get('responsibleEmail').setValue(this.option.responsibleEmail);
          this.optionForm.get('responsibleTel').setValue(this.option.responsibleTel);
         
      })
      }else {
        alert('Item not found!!');
      }
    });
  }


  onSubmit() {
    
    console.log(this.optionForm.value);
    this.api.updateOption(this.optionForm.value).subscribe();
    this.optionForm.reset();
    this.router.navigate(['option/all']);
  }
  cancel(){ this.optionForm.reset();}

}
