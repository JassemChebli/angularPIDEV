import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';

import { PfefileRoutingModule } from './pfefile-routing.module';
import { AllComponent } from './all/all.component';

@NgModule({
  declarations: [AllComponent],
  imports: [
    CommonModule,
    PfefileRoutingModule,
    TagInputModule,
    FormsModule
  ]
})
export class PfefileModule { }
