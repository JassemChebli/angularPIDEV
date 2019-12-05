import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PfefileRoutingModule } from './pfefile-routing.module';
import { AllComponent } from './all/all.component';

@NgModule({
  declarations: [AllComponent],
  imports: [
    CommonModule,
    PfefileRoutingModule
  ]
})
export class PfefileModule { }
