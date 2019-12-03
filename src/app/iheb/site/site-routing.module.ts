import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SiteComponent} from './all/site.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'all',
                component: SiteComponent,
                data: {
                    title: 'Sites'
                },
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SiteRoutingModule {
}
