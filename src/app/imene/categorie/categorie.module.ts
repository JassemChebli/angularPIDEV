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
import { PrevalidateComponent } from './prevalidate/prevalidate.component';
import { GradeComponent } from './grade/grade.component';
import {ChartsModule as Ng2Charts} from 'ng2-charts';
import { StatComponent } from './stat/stat.component';
import { PaymentComponent } from './payment/payment.component'
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [AllComponent, OneComponent, ConfirmationDialogCategorieComponent, CrudComponent, PrevalidateComponent, GradeComponent, StatComponent, PaymentComponent],
  imports: [
    CommonModule,
    CategorieRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
   Ng2SearchPipeModule,
   Ng2Charts,
   NgxQRCodeModule
  ],
  entryComponents: [
    CrudComponent,
    ConfirmationDialogCategorieComponent,
    PrevalidateComponent,
    GradeComponent
],
providers: [
  ConfirmationDialogCategorieService
]
})
export class CategorieModule { }
