import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PfefileRoutingModule { }
