import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PfeFileRoutingModule } from './pfe-file-routing.module';
import { PfeFileComponent } from './pfe-file.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastDefaults, SnotifyService, SnotifyModule } from 'ng-snotify';
import { PfeService } from 'app/wassim/pfe.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DragulaModule } from 'ng2-dragula';
import { CrudModalComponent } from '../crud-modal/crud-modal.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { CategorieService } from 'app/wassim/categorie.service';
import { MyPfeComponent } from '../pfe/my-pfe.component';
import { CrudModalChangeComponent } from '../pfe/crud-modal/crud-modal.component';
import { PfeModificationService } from 'app/wassim/pfe-modification.service';
import { PfemodificationComponent } from '../pfemodification/pfemodification.component';
import { CrudModalChangeValidationComponent } from '../pfemodification/crud-modal/crud-modal.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [PfeFileComponent , CrudModalComponent, MyPfeComponent, CrudModalChangeComponent, 
    PfemodificationComponent,CrudModalChangeValidationComponent],
  imports: [Ng2SearchPipeModule
,HttpClientModule,
    Ng2SmartTableModule,
    CommonModule,
    PfeFileRoutingModule,
    FormsModule,
    SnotifyModule, NgbModule,
    CommonModule,
    DragulaModule.forRoot(),
            FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgSelectModule
  ],
providers:  [{ provide: 'SnotifyToastConfig', useValue: ToastDefaults },
SnotifyService, CategorieService , PfeService , PfeModificationService],

entryComponents: [
  CrudModalComponent,
  CrudModalChangeComponent,
  CrudModalChangeValidationComponent
]
} )
export class PfeFileModule { }
