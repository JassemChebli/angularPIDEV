import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AllComponent } from './all/all.component'
import { SingleComponent } from './single/single.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ProjectComponent } from './project/project.component';
import { StudentGuard } from 'app/shared/auth/student-guard.service';
import { EmpGuard } from 'app/shared/auth/emp-guard.service';

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
        path: 'project',
        component: ProjectComponent,
        canActivate: [StudentGuard],
        data: {
          title: 'Student GP'
        }
      },
      {
        path: 'add',
        component: AddComponent,
        
        data: {
          title: 'Student Info'
        }
      },
      {
        path: 'update/:id',
        component: UpdateComponent,
        
        data: {
          title: 'Student Detail Modifitcation'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
