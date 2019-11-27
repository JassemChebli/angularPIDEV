import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceptedComponent } from './accepted.component';

const routes: Routes = [
    {
        path: '',
        component: AcceptedComponent,
        data: {
            title: 'Accepted Pfe Files'
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AcceptedRoutingModule { }