import { RouteInfo } from './sidebar.metadata';

    const   directorRoutes = [
            {
                // tslint:disable-next-line: max-line-length
                path: '', title: 'Students', icon: 'icon-graduation', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
                submenu: [
                    {
                        // tslint:disable-next-line: max-line-length
                        path: '/student/all', title: 'All', icon: 'ft-users', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                    },
                ]
            },
            {
                // tslint:disable-next-line: max-line-length
                path: '/pfe/all', title: 'Graduation Projects', icon: 'icon-notebook', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                // tslint:disable-next-line: max-line-length
                path: '/pfe/map', title: 'Students Locations', icon: 'ft-map', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
        ];

    const adminRoutes = [
        {
            // tslint:disable-next-line: max-line-length
            path: '', title: 'Students', icon: 'icon-graduation', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
            submenu: [
                {
                    // tslint:disable-next-line: max-line-length
                    path: '/student/all', title: 'All', icon: 'ft-users', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                },
                {
                    // tslint:disable-next-line: max-line-length
                    path: '/student/add', title: 'Add', icon: 'ft-user-plus', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                },
            ]
        },
        {
            // tslint:disable-next-line: max-line-length
            path: '', title: 'Directors', icon: 'icon-briefcase', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
            submenu: [

                {
                    // tslint:disable-next-line: max-line-length
                    path: '/director/all', title: 'All', icon: 'ft-users', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                },
                {
                    // tslint:disable-next-line: max-line-length
                    path: '/director/add', title: 'add', icon: 'ft-user-plus', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
                },
            ]
        },
    ]

    const studentRoutes = [
        {
        // tslint:disable-next-line: max-line-length
        path: '/student/project', title: 'My Graduation Project', icon: 'icon-notebook', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
        },
 ]
export const ROUTES: RouteInfo[] =  directorRoutes;
export const ROUTESADMIN: RouteInfo[] = adminRoutes;
export const ROUTESSUTDENT: RouteInfo[] = studentRoutes;
