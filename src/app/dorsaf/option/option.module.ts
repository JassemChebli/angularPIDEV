import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OptionRoutingModule } from './option-routing.module';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { AllComponent } from './all/all.component';

@NgModule({
  declarations: [AddComponent, UpdateComponent, AllComponent],
  imports: [
    CommonModule,
    OptionRoutingModule,
    ReactiveFormsModule
  ]
})
export class OptionModule { }
