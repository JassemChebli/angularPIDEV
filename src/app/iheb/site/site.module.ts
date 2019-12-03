import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SiteRoutingModule} from './site-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CrudModalSiteComponent} from './crud-modal-site/crud-modal-site.component';
import {ConfirmationDialogSiteComponent} from './crud-modal-site/confirmation-dialog-site/confirmation-dialog-site.component';
import {SiteComponent} from './all/site.component';
import {ConfirmationDialogSiteService} from './crud-modal-site/confirmation-dialog-site/confirmation-dialog-site.service';

@NgModule({
    declarations: [
        SiteComponent,
        CrudModalSiteComponent,
        ConfirmationDialogSiteComponent
    ],
    imports: [
        CommonModule,
        SiteRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule
    ],
    entryComponents: [
        CrudModalSiteComponent,
        ConfirmationDialogSiteComponent
    ],
    providers: [
        ConfirmationDialogSiteService
    ]
})
export class SiteModule {
}
