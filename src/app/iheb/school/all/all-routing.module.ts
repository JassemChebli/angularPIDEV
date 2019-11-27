import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all.component';

const routes: Routes = [
  {
  path: '',
  component: AllComponent,
  data: {
    title: 'All Schools'
  },

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllRoutingModule { }
