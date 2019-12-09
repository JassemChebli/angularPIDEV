import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'app/wassim/entreprise.service';
import { SnotifyService } from 'ng-snotify';
import { Router } from '@angular/router';
import { Entreprise } from 'app/modals/Entreprise';
import { Observable, config } from 'rxjs';

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.scss']
})
export class EntreprisesComponent implements OnInit {


  entreprises: Entreprise[];
  entrepriseExist = false;
  codeN: number;
  continuer = false;
  settings = {
    mode: external,
    rowSelect: true, // actions: true,
    noDataMessage: 'Aucune entreprise au base de données ',
    delete: {
      confirmDelete: true,

      deleteButtonContent: 'supprimer',
      saveButtonContent: 'save',
      cancelButtonContent: 'cancel'
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
    columns: {
      id: {
        title: 'id',
      editable: false


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
  constructor(private dataService: EntrepriseService, private router: Router, private snotifyService: SnotifyService) { }


  getAllEntreprises() {


    this.dataService.getEntreprises().subscribe(arts => { this.entreprises = arts },
      err => this.snotifyService.error('error serveur', 'Error', { timeout: 3000 }), () => console.log('HTTP request completed.'));

    // .catch(err => this.snotifyService.error('error serveur', 'Error', { timeout: 2000 }))
  }


  ngOnInit() {
    this.getAllEntreprises();
  }

  redirect(data) {
    console.log(data);
    //  this.router.navigate(['/entreprise', data.data.codearticle]);

  }
  refresh() {
    window.location.reload();
  }
  onDeleteConfirm(event) {
    console.log(event);

    this.snotifyService.confirm('voulez vous supprimer cette entreprise', 'confirmation', {
      timeout: 5000,
      showProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      position: 'centerCenter',
      buttons: [
        {
          text: 'Yes', action: (toast) => {
            this.snotifyService.remove(toast.id);

            this.dataService.deleteEntreprise(event.data.id ).subscribe(arts => {

            },
              err => {
                this.snotifyService.error('Entreprise non supprimée', {
                  timeout: 3000,
                  showProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true
                });
                event.confirm.reject();

              }
              ,
              () => {
                this.snotifyService.success('Entreprise a été supprimée ', {
                  timeout: 3000,
                  showProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true
                });
                event.confirm.resolve();


              });
          }, bold: false
        },

        { text: 'Close', action: (toast) => { console.log('Clicked: No'); this.snotifyService.remove(toast.id); }, bold: true },
      ]
    });

  }
  // tslint:disable-next-line:member-ordering


  onCreateConfirm(event) {
    console.log(event.newData);
    if (event.newData.nom === '')
    {
      this.snotifyService.info('le champ nom est obligatoire', {
        timeout: 3000,
        showProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true
      });
    } else{
    this.snotifyService.confirm('voulez vous ajouter une entreprise', 'confirmation', {
      timeout: 5000,
      showProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      position: 'centerCenter',
      buttons: [
        {
          text: 'Yes', action: (toast) => {
            this.snotifyService.remove(toast.id);
            this.dataService.createEntreprise(event.newData).subscribe(arts => {
console.log('ddsdsd' + arts.id);
            },
              err => {
                this.snotifyService.error('Entreprise non ajoutée', {
                  timeout: 3000,
                  showProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true
                });
                event.confirm.reject();

              }
              ,
              () => {
                this.snotifyService.success('Entreprise a été ajoutée ', {
                  timeout: 3000,
                  showProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true
                });
                event.confirm.resolve();


              });
          }, bold: false
        },

        { text: 'Close', action: (toast) => { console.log('Clicked: No'); this.snotifyService.remove(toast.id); }, bold: true },
      ]
    });


  }
    /*   if (window.confirm('voulez vous ajouter entreprise')) {
         event.confirm.resolve();
         console.log('Create Event In Console')
         console.log(event);
         console.log(event.newData);




       } else {
         event.confirm.reject();
         console.log('Create Event In Console')

       }
       console.log('Edit Event In Console')
       console.log(event);
   */
  }

  onSaveConfirm(event) {
    console.log(event.newData);
    if (event.newData.nom === '')
    {
      this.snotifyService.info('le champ nom est obligatoire', {
        timeout: 3000,
        showProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true
      });
    } else{
    this.snotifyService.confirm('voulez vous modifier cette entreprise', 'confirmation', {
      timeout: 5000,
      showProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      position: 'centerCenter',
      buttons: [
        {
          text: 'Yes', action: (toast) => {
            this.snotifyService.remove(toast.id);

            this.dataService.updateEntreprise(event.newData.id , event.newData).subscribe(arts => {

            },
              err => {
                this.snotifyService.error('Entreprise non modifiée', {
                  timeout: 3000,
                  showProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true
                });
                event.confirm.reject();

              }
              ,
              () => {
                this.snotifyService.success('Entreprise a été modifiée ', {
                  timeout: 3000,
                  showProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true
                });
                event.confirm.resolve();


              });
          }, bold: false
        },

        { text: 'Close', action: (toast) => { console.log('Clicked: No'); this.snotifyService.remove(toast.id); }, bold: true },
      ]
    });
  }
  }
}
