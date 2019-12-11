import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { OneComponent } from './one/one.component';
import { StatComponent } from './stat/stat.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: 'all',
        component: AllComponent,
        data: {
          title: 'All Categories'
        },
      },
      {
        path: 'stat',
        component: StatComponent,
        data: {
          title: 'All Categories'
        },
      },
      {
        path: 'paying',
        component: PaymentComponent,
        data: {
          title: 'AppStripeTestComponent'
        },
      },
      {
        path: 'details/:id',
        component: OneComponent,
        data: {
          title: 'All Categories'
        },
       
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
