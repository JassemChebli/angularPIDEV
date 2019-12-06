import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { AddComponent } from './add/add.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    DragDropModule
  ]
})
export class TemplateModule { }
