import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AllComponent } from './all/all.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [{
  path: 'add',
  component: AddComponent,
  data: {
    title: 'Add option'
  }

}, {
  path: 'all',
  component: AllComponent,
  data: {
    title: ' All Option'
  }

}, {
  path: 'update/:id',
  component: UpdateComponent,
  data: {
    title: 'update option'
  }

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionRoutingModule { }
