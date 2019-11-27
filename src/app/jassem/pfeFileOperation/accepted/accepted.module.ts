import { AcceptedRoutingModule } from './accepted-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptedComponent } from './accepted.component';

@NgModule({
    imports: [
        CommonModule,
        AcceptedRoutingModule
    ],
    declarations: [
        AcceptedComponent
    ]
})

export class AcceptedModule { }