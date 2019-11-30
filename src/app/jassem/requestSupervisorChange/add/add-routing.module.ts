import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add.component';

const routes: Routes = [
  {
    path: '',
    component: AddComponent,
    data: {
      title: 'Add Supervisor request changing'
    },

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRoutingModule { }
