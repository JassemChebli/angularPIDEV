import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllComponent} from './all/all.component';
import {DetailsComponent} from './details/details.component';
import {MySchoolComponent} from './my-school/my-school.component';
import {DepartmentsComponent} from './departments/departments.component';
import {SitesComponent} from './sites/sites.component';

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
            },
            {
                path: 'mySchool',
                component: MySchoolComponent,
                data: {
                    title: 'My school'
                },
            },
            {
                path: 'mySchool/sites',
                component: SitesComponent,
                data: {
                    title: 'My sites'
                },
            },
            {
                path: 'mySchool/departments',
                component: DepartmentsComponent,
                data: {
                    title: 'My departments'
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
