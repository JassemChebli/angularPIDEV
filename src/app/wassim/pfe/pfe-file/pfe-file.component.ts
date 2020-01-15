import { Component, OnInit, ElementRef } from '@angular/core';
import { PfeFile } from 'app/modals/PfeFile';
import { PfeService } from 'app/wassim/pfe.service';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { Entreprise } from 'app/modals/Entreprise';
import { EntrepriseService } from 'app/wassim/entreprise.service';
import { DragulaService } from 'ng2-dragula';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrudModalComponent } from '../crud-modal/crud-modal.component';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CategorieService } from 'app/wassim/categorie.service';
import { Categorie } from 'app/modals/Categorie';

@Component({
  selector: 'app-pfe-file',
  templateUrl: './pfe-file.component.html',
  styleUrls: ['./pfe-file.component.scss']
})
export class PfeFileComponent implements OnInit {
  pfe = new PfeFile;
  isCollapsed = true;
  ent = new Entreprise;

  entreprises: Entreprise[];
  settings = {
    mode: external,
    rowSelect: true, // actions: true,
    noDataMessage: 'Aucune entreprise au base de données ',
    actions: {
      edit: false,
      delete: false,
      add: false
    },
    columns: {
      id: {
        title: 'id',
        editable: false,



      },
      nom: {
        title: 'Nom'

      },
      website: {
        title: 'Site Web'

      },
      address: {
        title: 'adresse'
      },
      country: {
        title: 'pays'
      },
      nameResponsable: {
        title: 'responsable'
      },
      emailResponsable: {
        title: 'email responsable'
      },
      emailEncadrent: {
        title: 'email encadrant'
      }
    }
  };
  myFormx = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    problematic: new FormControl('', Validators.required),
    functionnalities: new FormControl('', Validators.required),
    keywords: new FormControl('', Validators.required),
    emailPersonel: new FormControl('', Validators.required),
    emailProfessionel: new FormControl('', Validators.required)



  });
  constructor(private dataService: PfeService, private entrepriseDataService: EntrepriseService,
    private router: Router, private snotifyService: SnotifyService,
    private dragulaService: DragulaService,
    private elRef: ElementRef, private modalService: NgbModal
    , private formBuilder: FormBuilder
    , private categorieService: CategorieService
  ) { }



  // tslint:disable-next-line:member-ordering
  categories: Categorie[];
  // tslint:disable-next-line:member-ordering
  selected: Categorie[];

  ngOnInit() {
    this.categorieService.getCategories().subscribe(a => {
      this.categories = a;
      console.log(this.categories);
    },
      err => {
        this.snotifyService.error('Error in load the categories', {
          timeout: 3000,
          showProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true
        });

      }
      ,
      () => {



      });
    this.entrepriseDataService.getEntreprises().subscribe(arts => {
      this.entreprises = arts;
      console.log(this.entreprises);
    },
      err => {
        this.snotifyService.error('Error in load the entreprises', {
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



  save() {
    console.log('daefsvgsdgdsfgfdsgdfgsdf');
    console.log('daefsvgsdgdsfgfdsgdfgsdf');
    this.pfe.categories = this.selected;
    this.snotifyService.confirm('would you like to add your PFE now ', 'confirmation', {
      timeout: 5000,
      showProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      position: 'centerCenter',
      buttons: [
        {
          text: 'Yes', action: (toast) => {
            this.snotifyService.remove(toast.id);
if (this.ent.id == null){
            this.entrepriseDataService.createEntreprise(this.ent).subscribe(arts => {
              this.pfe.entreprise = arts;
            },
              err => {
                this.snotifyService.error('Entreprise non ajoutée', {
                  timeout: 3000,
                  showProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true
                });

              }
              ,
              () => {
                this.snotifyService.success('Entreprise a été ajoutée ', {
                  timeout: 3000,
                  showProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true
                });
                this.dataService.createPfe(this.pfe).subscribe(arts => {
                  console.log('ddsdsd' + arts.id);

                },
                  err => {
                    this.snotifyService.error('Error', {
                      timeout: 3000,
                      showProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true
                    });

                  }
                  ,
                  () => {
                    this.snotifyService.success('Your pfe has been added ', {
                      timeout: 3000,
                      showProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true
                    });


                  });

              });
            }else{


this.pfe.entreprise = this.ent;

             this.dataService.createPfe(this.pfe).subscribe(arts => {

                console.log(arts.id);
                this.router.navigate(['/pfe/my', arts.id]);
              },
                err => {
                  this.snotifyService.error('Error', {
                    timeout: 3000,
                    showProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true
                  });

                }
                ,
                () => {
                  this.snotifyService.success('Your pfe has been added ', {
                    timeout: 3000,
                    showProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true
                  });


                });
            }

          }, bold: false
        },

        { text: 'Close', action: (toast) => { console.log('Clicked: No'); this.snotifyService.remove(toast.id); }, bold: true },
      ]
    });


  }

  choose(data) {
    this.ent = data.data;
    this.isCollapsed = !this.isCollapsed;

  }


  addTask() {
    const modalRef = this.modalService.open(CrudModalComponent);
    modalRef.componentInstance.id = 0;  // should be the id
    modalRef.componentInstance.data = {
      nom: '', website: '', address: '', country: '',
      nameResponsable: '', emailResponsable: '', emailEncadrent: ''
    }; // should be the dat'

    modalRef.result.then((result) => {
      this.ent = new Entreprise();
      this.ent.nom = result.nom;
      this.ent.website = result.website;
      this.ent.address = result.address;
      this.ent.country = result.country;
      this.ent.nameResponsable = result.nameResponsable;
      this.ent.emailResponsable = result.emailResponsable;
      this.ent.emailEncadrent = result.emailEncadrent;


      console.log(result);
      console.log(this.ent);
    }).catch((error) => {
      console.log(error);
    });


  }

}

