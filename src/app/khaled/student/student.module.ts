import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StudentRoutingModule } from './student-routing.module';
import { AllComponent } from './all/all.component';
import { SingleComponent } from './single/single.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [AllComponent, SingleComponent, AddComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
