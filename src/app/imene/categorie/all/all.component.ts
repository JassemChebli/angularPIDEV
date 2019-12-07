import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import {Categorie} from '../../Models/Categorie';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CrudComponent} from '../crud/crud.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {ConfirmationDialogCategorieService} from '../crud/confirmation-dialog-categorie/confirmation-dialog-categorie.service';
import { forEach } from '@angular/router/src/utils/collection';
import { PfeFile } from 'app/imene/Models/PfeFile';
import { PrevalidateComponent } from '../prevalidate/prevalidate.component';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

    all: Categorie[] = [];
    searched: Categorie[] = [];
    items: Categorie[] = [];
    searching = false;
    keyword: string;
    currentPage: string = "About"
    pfefile: PfeFile[] = [];
    prevpfefile:PfeFile[] = [];
    id:number;;
    year:number;
    role:string;
    mssg:string;
    s:string;
  constructor(public restApi: RestApiService,private modalService: NgbModal,
    private confirmationDialogService: ConfirmationDialogCategorieService,) { }

  ngOnInit() {
    this.loadAll();
    console.log(this.all)
    this.getnames();
    console.log(this.items);
    this.loadAllprevpfiles();
   
  }
 /////////////////////////// CRUD CATEGORY ///////////////////////////
  loadAll() {
    return this.restApi.getAll().subscribe((data) => {
        this.all = data;
    })
}
getnames(){
 this.all.forEach(x=>this.items.push(x));
 
}


  addC(){
    const modalRef = this.modalService.open(CrudComponent);
    modalRef.componentInstance.id = 0; // should be the id
    modalRef.componentInstance.data = {nom: '', address: ''}; // should be the data

    modalRef.result.then((result) => {
        this.restApi.addSite(result.nom, result.address).subscribe(data => {
            this.loadAll();
        });
    }).catch((error) => {
        console.error(error);
    });

  }
  editC(id: number){

    let c = new Categorie();
    c = this.all.find(x => x.id === id);
    const modalRef = this.modalService.open(CrudComponent);
    modalRef.componentInstance.id = id; // should be the id
    modalRef.componentInstance.data = {
        nom: c.label,
        address: c.status,
       
    }; // should be the data

    modalRef.result.then((result) => {
      c.label = result.nom;
      c.status = result.address;
        
        this.restApi.updateSite(id,c).subscribe(data => {
                this.loadAll();
            },
            error => {
                console.error(error);
            });

    }).catch((error: ExceptionInformation) => {
        console.error(error.domain);
    });


  }
  deleteC(id: number){
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this site ?')
    .then((confirmed) => {
        if (confirmed) {
            this.restApi.deleteSite(id).subscribe(data => {
                this.loadAll();
            })
        }
    })
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

  }

  searchCategories() {
    if (this.keyword != null && this.keyword != '') {
        this.searching = true;
        this.searched = this.all.filter(x => x.label.toUpperCase().includes(this.keyword.toUpperCase()));
        console.log(this.searched);
    } else {
        this.searching = false;
        this.loadAll();
    }
}
showPage(page: string) {
  this.currentPage = page;
}

////////////////////////////////////PFE FILE ///////////////////


loadbyyearrole(id:number,year:number,role:string) {


  if ( id != null) {
    this.restApi.getFilebyyearandrole(id,year,role).subscribe((data) => {
      this.pfefile.push(data);
      console.log(this.pfefile);
    });
  }else {
    alert(' not found!!');
  }

}

Prevalidate(id:number){
  let p = new PfeFile();
 
  p = this.prevpfefile.find(x => x.id === id);
  const modalRef = this.modalService.open(PrevalidateComponent);
  modalRef.componentInstance.id = id; // should be the id
  modalRef.componentInstance.data = {
      status: p.spf,
      msg: this.mssg,
      
     
  }; // should be the data

  modalRef.result.then((result) => {
    p.spf = result.status;
    this.mssg=result.msg;
    this.s=result.status;
   
      
      this.restApi.prevalidate(id,this.s,this.mssg,p).subscribe(data => {
              this.loadAllprevpfiles();
          },
          error => {
              console.error(error);
          });

  }).catch((error: ExceptionInformation) => {
      console.error(error.domain);
  });

}
loadAllprevpfiles() {
  return this.restApi.getAllprevfiles().subscribe((data) => {
      this.prevpfefile = data;
  })
}

}
