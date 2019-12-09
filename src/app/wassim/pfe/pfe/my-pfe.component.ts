import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PfeFile } from 'app/modals/PfeFile';
import { PfeService } from 'app/wassim/pfe.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';
import { DragulaService } from 'ng2-dragula';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PfeFileChange } from 'app/modals/PfeFileChange';
import { CrudModalChangeComponent } from './crud-modal/crud-modal.component';
import { PfeModificationService } from 'app/wassim/pfe-modification.service';

@Component({
  selector: 'app-my-pfe',
  templateUrl: './my-pfe.component.html',
  styleUrls: ['./my-pfe.component.scss']
})
export class MyPfeComponent implements OnInit {
  public idd: any;
  public pfe= new PfeFile ;
  public state= true  ;
  myFormx = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    problematic: new FormControl('', Validators.required),
    functionnalities: new FormControl('', Validators.required),
    keywords: new FormControl('', Validators.required),
    emailPersonel: new FormControl('', Validators.required),
    emailProfessionel: new FormControl('', Validators.required)



  });
  constructor(private snotifyService: SnotifyService, private route: ActivatedRoute, private pfeService: PfeService,
    private router: Router, private dragulaService: DragulaService,
    private elRef: ElementRef, private modalService: NgbModal,
    private pfeChange: PfeModificationService) { }
    // tslint:disable-next-line:member-ordering
    status = false ;
  ngOnInit() {
if (this.pfe.status === 'WAITING'){
  this.status = true;

}
    this.idd = this.route.snapshot.paramMap.get('id');
    console.log(this.idd);
    if (this.idd != null) {
      // tslint:disable-next-line:radix
      this.pfeService.getPfe(parseInt(this.idd)).subscribe(arts => {
        this.pfe = arts;
        console.log(this.pfe);
      },
        err => {
          this.snotifyService.error('Error while loading your pfe', {
            timeout: 3000,
            showProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true
          });

        }
        ,
        () => {



        });

    }

  }




edit(){

this.state = ! this.state;

}
// tslint:disable-next-line:member-ordering
change: PfeFileChange;

addTask() {
  const modalRef = this.modalService.open(CrudModalChangeComponent);
  modalRef.componentInstance.id = 0;  // should be the id
  modalRef.componentInstance.data = {
    field: '', content: ''
  }; // should be the dat'

  modalRef.result.then((result) => {
    this.change = new PfeFileChange();
    this.change.content = result.content;

    this.change.field = result.field;


    console.log(result);
    console.log(this.change);

    this.pfeChange.createPfeMod(this.change).subscribe(arts => {

      console.log(this.pfe);

    },
      err => {
        this.snotifyService.error('Error while demanding pfe modification', {
          timeout: 3000,
          showProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true
        });

      }
      ,
      () => {

        this.snotifyService.success('your demand is saved', {
          timeout: 3000,
          showProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true
        });

      });

  }).catch((error) => {
    console.log(error);
  });


}
save(){
this.pfeService.updatePfe(this.pfe.id, this.pfe).subscribe(arts => {

  console.log(this.pfe);

},
  err => {
    this.snotifyService.error('Error while loading your pfe', {
      timeout: 3000,
      showProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true
    });

  }
  ,
  () => {

    this.snotifyService.success('your pfe has been updated', {
      timeout: 3000,
      showProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true
    });

  });


}
}

