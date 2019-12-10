import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { SingleComponent } from './single/single.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    children: [
        {
          path: 'all',
          component: AllComponent,
          data: {
            title: 'Directors List'
          }
        },
        {
          path: 'details/:id',
          component: SingleComponent,
          data: {
            title: 'Director details'
          }
        },
        {
          path: 'add',
          component: AddComponent,
          data: {
            title: 'Add a director'
          }
        },
        {
          path: 'update/:id',
          component: UpdateComponent,
          data: {
            title: 'Update Director details'
          }
        },
      ]
  }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorRoutingModule { }
