import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppStripeTestComponent } from './app-stripe-test/app-stripe-test.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: 'checkout',
        component: AppStripeTestComponent,
        data: {
          title: 'AppStripeTestComponent'
        },
      },
   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { 




}
