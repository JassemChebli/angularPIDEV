import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { EntreprisesComponent } from './entreprises.component';
import { EntrepriseService } from 'app/wassim/entreprise.service';
import { SnotifyService } from 'ng-snotify';
import { Entreprise } from 'app/modals/Entreprise';


const routes: Routes = [
    {
        path: '',
        component: EntreprisesComponent,
        data: {
            title: 'Entreprises'
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class EntreprisesRouting{

 }
