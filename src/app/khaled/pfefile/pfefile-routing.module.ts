import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { SingleComponent } from './single/single.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all',
        component: AllComponent,
        data: {
          title: 'GPs List'
        }
      },
      {
        path: 'details/:id',
        component: SingleComponent,
        data: {
          title: 'GP details'
        }
      },
      {
        path: 'map',
        component: MapComponent,
        data: {
          title: 'GPs Location'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PfefileRoutingModule { }
