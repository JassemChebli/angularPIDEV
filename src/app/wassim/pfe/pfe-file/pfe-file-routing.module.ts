import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PfeFileComponent } from './pfe-file.component';
import { MyPfeComponent } from '../pfe/my-pfe.component';

const routes: Routes = [
  {
      path: '',
      component: PfeFileComponent,
      data: {
          title: 'Notifications List'
      },


  },
{
  path: 'my/:id',
  component: MyPfeComponent,
  data: {
      title: 'mypfe'
  },
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PfeFileRoutingModule { }
