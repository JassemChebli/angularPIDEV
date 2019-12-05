import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DirectorRoutingModule } from './director-routing.module';
import { AllComponent } from './all/all.component';
import { SingleComponent } from './single/single.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [AllComponent, SingleComponent, AddComponent, UpdateComponent],
  imports: [
    CommonModule,
    DirectorRoutingModule,
    ReactiveFormsModule
  ]
})
export class DirectorModule { }
