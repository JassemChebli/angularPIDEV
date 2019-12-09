import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPfeComponent } from './my-pfe.component';

const routes: Routes = [  {
  path: '',
  component: MyPfeComponent,
  data: {
      title: 'my PfeFile'
  },

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPfeRoutingModule { }
