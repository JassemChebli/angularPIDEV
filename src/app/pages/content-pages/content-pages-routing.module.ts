import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error/error-page.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login Page'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentPagesRoutingModule { }
