import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { NgxStripeModule } from 'ngx-stripe';
import { AppStripeTestComponent } from './app-stripe-test/app-stripe-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxQRCodeModule } from 'ngx-qrcode2';
@NgModule({
  declarations: [AppStripeTestComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    NgxStripeModule.forRoot('pk_test_trMR4X7wvfQBEjmhiT1byKG300RWEOhQUC'),
    FormsModule,
    ReactiveFormsModule,
    NgxQRCodeModule

  ]
})
export class CheckoutModule { }
