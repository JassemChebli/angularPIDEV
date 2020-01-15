import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { SingleComponent } from './single/single.component';
import { MapComponent } from './map/map.component';
import { EmpGuard } from 'app/shared/auth/emp-guard.service';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all',
        component: AllComponent,
        canActivate: [EmpGuard],
        data: {
          title: 'GPs List'
        }
      },
      {
        path: 'details/:id',
        component: SingleComponent,
        canActivate: [EmpGuard],
        data: {
          title: 'GP details'
        }
      },
      {
        path: 'map',
        component: MapComponent,
        canActivate: [EmpGuard],
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
