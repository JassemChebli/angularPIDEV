import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';

import { StatComponent } from './stat/stat.component';

import { ChartsModule as Ng2Charts } from 'ng2-charts';
@NgModule({
  declarations: [StatComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    Ng2Charts
  ]
})
export class ChartsModule { }
