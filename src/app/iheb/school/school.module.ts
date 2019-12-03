import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SchoolRoutingModule} from './school-routing.module';
import {AllComponent} from './all/all.component';
import {CrudModalComponent} from './crud-modal/crud-modal.component';
import {ConfirmationDialogComponent} from './crud-modal/confirmation-dialog/confirmation-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmationDialogService} from './crud-modal/confirmation-dialog/confirmation-dialog.service';
import {DetailsComponent} from './details/details.component';

@NgModule({
    declarations: [
        AllComponent,
        DetailsComponent,
        CrudModalComponent,
        ConfirmationDialogComponent
    ],
    imports: [
        CommonModule,
        SchoolRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule
    ],
    entryComponents: [
        CrudModalComponent,
        ConfirmationDialogComponent
    ],
    providers: [ConfirmationDialogService]
})
export class SchoolModule {
}
