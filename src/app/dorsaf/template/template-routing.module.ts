import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { ConventionTemplateComponent } from './convention-template/convention-template.component';


const routes: Routes = [{
  path: 'add/:id',
  component: AddComponent,
  data: {
      title: 'template'
  },

},{
  path: 'show',
  component: SearchComponent,
  data: {
      title: 'show student '
  }},
  {path: 'addPfe/:id',
  component: ConventionTemplateComponent,
  data: {
      title: 'template'
  },

},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
