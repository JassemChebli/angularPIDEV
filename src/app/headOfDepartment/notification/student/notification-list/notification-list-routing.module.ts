import { NotificationListComponent } from './notification-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: NotificationListComponent,
        data: {
            title: 'NotificationList'
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ChatRoutingModule { }

export const routedComponents = [NotificationListComponent];