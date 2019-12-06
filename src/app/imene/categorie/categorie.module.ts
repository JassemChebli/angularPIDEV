import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AllComponent } from './all/all.component';
import { OneComponent } from './one/one.component'
import { CategorieRoutingModule } from './categorie-routing.module';
import { ConfirmationDialogCategorieComponent } from './crud/confirmation-dialog-categorie/confirmation-dialog-categorie.component';
import {ConfirmationDialogCategorieService} from './crud/confirmation-dialog-categorie/confirmation-dialog-categorie.service';
import { CrudComponent } from './crud/crud.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [AllComponent, OneComponent, ConfirmationDialogCategorieComponent, CrudComponent],
  imports: [
    CommonModule,
    CategorieRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
   Ng2SearchPipeModule
  ],
  entryComponents: [
    CrudComponent,
    ConfirmationDialogCategorieComponent
],
providers: [
  ConfirmationDialogCategorieService
]
})
export class CategorieModule { }
