import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllComponent} from './all/all.component';
import {DetailsComponent} from './details/details.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'all',
                component: AllComponent,
                data: {
                    title: 'All Schools'
                },
            },
            {
                path: 'details/:id',
                component: DetailsComponent,
                data: {
                    title: 'School details'
                },
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SchoolRoutingModule {
}
