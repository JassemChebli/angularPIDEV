import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntreprisesRouting } from './entreprises-routing';
import { EntreprisesComponent } from './entreprises.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EntrepriseService } from 'app/wassim/entreprise.service';
@NgModule({
  declarations: [EntreprisesComponent],
  imports: [HttpClientModule, Ng2SmartTableModule,
    CommonModule,
    EntreprisesRouting, HttpModule, SnotifyModule],
  providers: [{ provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService, HttpClient, EntrepriseService
  ]

})
export class EntreprisesModule { }
