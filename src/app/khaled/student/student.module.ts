import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-ui-switch';

import { StudentRoutingModule } from './student-routing.module';
import { AllComponent } from './all/all.component';
import { SingleComponent } from './single/single.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [AllComponent, SingleComponent, AddComponent, UpdateComponent, ProjectComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    TagInputModule,
    FormsModule,
    UiSwitchModule
  ]
})
export class StudentModule { }
