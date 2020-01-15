import { Component, OnInit } from '@angular/core';
import { PfeFileChange } from 'app/modals/PfeFileChange';
import { PfeModificationService } from 'app/wassim/pfe-modification.service';
import { SnotifyService } from 'ng-snotify';
import { CrudModalChangeValidationComponent } from './crud-modal/crud-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pfemodification',
  templateUrl: './pfemodification.component.html',
  styleUrls: ['./pfemodification.component.scss']
})
export class PfemodificationComponent implements OnInit {
  mods: PfeFileChange[];
  searchText;

  constructor(private dataService: PfeModificationService, private snotifyService: SnotifyService
    , private modalService: NgbModal) { }

  ngOnInit() {

    this.dataService.getPfeModification().subscribe(arts => { this.mods = arts; console.log(this.mods); },
      err => this.snotifyService.error('error serveur', 'Error', { timeout: 3000 }), () => console.log('HTTP request completed.'));
  }
  myDrop: any;
  myDrop1: any;
  show(x: PfeFileChange) {
    console.log(x);
    const modalRef = this.modalService.open(CrudModalChangeValidationComponent);
    modalRef.componentInstance.id = 0;  // should be the id
    modalRef.componentInstance.data = {
      title: x.pfeFile.title, description: x.pfeFile.description,
      problematic: x.pfeFile.problematic,
      functionnalities: x.pfeFile.functionnalities,
      keywords: x.pfeFile.keywords,
      emailPersonel: x.pfeFile.emailPersonel,
      emailProfessionel: x.pfeFile.emailProfessionel
    }; // should be the dat'

    modalRef.result.then((result) => {

    }).catch((error) => {
      console.log(error);
    });
  }


  validate(x) {
    this.dataService.validate(x.id).subscribe(arts => {
    },
      err => {
        this.snotifyService.error('Error in valdating the modification', {
          timeout: 3000,
          showProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true
        });

      }
      ,
      () => {
        this.snotifyService.success('you just approved the modification ', {
          timeout: 3000,
          showProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true
        });
      });
    }  
  

    refuse(x){
      this.dataService.refuse(x.id).subscribe(arts => {
      },
        err => {
          this.snotifyService.error('Error in valdating the modification', {
            timeout: 3000,
            showProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true
          });
  
        }
        ,
        () => {
          this.snotifyService.success('you just approved the modification ', {
            timeout: 3000,
            showProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true
          });
        });

    }

    delete(x , i ){

      this.dataService.delete(x.id).subscribe(arts => {
      },
        err => {
          this.snotifyService.error(' modification hasnt been deleted', {
            timeout: 3000,
            showProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true
          });
  
        }
        ,
        () => {
          this.snotifyService.success('modification has been deleted', {
            timeout: 3000,
            showProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true
          });
          this.mods.splice(i,1) ;
        });

    }


}
