import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component'
import { SingleComponent } from './single/single.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all',
        component: AllComponent,
        data: {
          title: 'Students List'
        }
      },
      {
        path: 'details/:id',
        component: SingleComponent,
        data: {
          title: 'Student Detail'
        }
      },
      {
        path: 'add',
        component: AddComponent,
        data: {
          title: 'Student Info'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
