import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SchoolRoutingModule} from './school-routing.module';
import {AllComponent} from './all/all.component';
import {ConfirmationDialogComponent} from './crud-modal/confirmation-dialog/confirmation-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmationDialogService} from './crud-modal/confirmation-dialog/confirmation-dialog.service';
import {DetailsComponent} from './details/details.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {CrudAddComponent} from './crud-modal/modal-add/crud-add.component';
import {CrudUpdateComponent} from './crud-modal/modal-update/crud-update.component';
import { MySchoolComponent } from './my-school/my-school.component';
import {CrudUpdateMyschoolComponent} from './my-school/modal-update-myschool/crud-update-myschool.component';
import { SitesComponent } from './sites/sites.component';
import { DepartmentsComponent } from './departments/departments.component';
import {ConfirmationDialogSiteComponent} from './sites/crud-modal-site/confirmation-dialog-site/confirmation-dialog-site.component';
import {ConfirmationDialogSiteService} from './sites/crud-modal-site/confirmation-dialog-site/confirmation-dialog-site.service';
import {CrudAddSiteComponent} from './sites/crud-modal-site/modal-add-site/crud-add-site.component';
import {CrudUpdateSiteComponent} from './sites/crud-modal-site/modal-update-site/crud-update-site.component';
import {CrudAddDepComponent} from './departments/crud-modal-dep/modal-add-dep/crud-add-dep.component';
import {CrudUpdateDepComponent} from './departments/crud-modal-dep/modal-update-dep/crud-update-dep.component';
import {ConfirmationDialogDepService} from './departments/crud-modal-dep/confirmation-dialog-dep/confirmation-dialog-dep.service';
import {ConfirmationDialogDepComponent} from './departments/crud-modal-dep/confirmation-dialog-dep/confirmation-dialog-dep.component';
import { MySiteComponent } from './my-site/my-site.component';
import { MyDepartmentsComponent } from './my-departments/my-departments.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    declarations: [
        AllComponent,
        DetailsComponent,
        ConfirmationDialogComponent,
        CrudAddComponent,
        CrudUpdateComponent,
        MySchoolComponent,
        CrudUpdateMyschoolComponent,
        SitesComponent,
        DepartmentsComponent,
        ConfirmationDialogSiteComponent,
        CrudAddSiteComponent,
        CrudUpdateSiteComponent,
        CrudAddDepComponent,
        CrudUpdateDepComponent,
        ConfirmationDialogDepComponent,
        MySiteComponent,
        MyDepartmentsComponent,
    ],
    imports: [
        CommonModule,
        SchoolRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgSelectModule,
        NgxPaginationModule,
    ],
    entryComponents: [
        ConfirmationDialogComponent,
        CrudAddComponent,
        CrudUpdateComponent,
        CrudUpdateMyschoolComponent,
        ConfirmationDialogSiteComponent,
        CrudAddSiteComponent,
        CrudUpdateSiteComponent,
        CrudAddDepComponent,
        CrudUpdateDepComponent,
        ConfirmationDialogDepComponent
    ],
    providers: [
        ConfirmationDialogService,
        ConfirmationDialogSiteService,
        ConfirmationDialogDepService,
    ]
})
export class SchoolModule {
}
