import {RouteInfo} from './sidebar.metadata';

const directorRoutes = [
    {
        // tslint:disable-next-line: max-line-length
        path: '',
        title: 'Students',
        icon: 'icon-graduation',
        class: 'has-sub',
        badge: '',
        badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
        isExternalLink: false,
        submenu: [
            {
                // tslint:disable-next-line: max-line-length
                path: '/student/all',
                title: 'All',
                icon: 'ft-users',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
        ]
    },
    {
        // tslint:disable-next-line: max-line-length
        path: '/pfe/all',
        title: 'Graduation Projects',
        icon: 'icon-notebook',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    {
        // tslint:disable-next-line: max-line-length
        path: '/pfe/map',
        title: 'Students Locations',
        icon: 'ft-map',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
];

const adminRoutes = [
    {
        // tslint:disable-next-line: max-line-length
        path: '',
        title: 'Students',
        icon: 'icon-graduation',
        class: 'has-sub',
        badge: '',
        badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
        isExternalLink: false,
        submenu: [
            {
                // tslint:disable-next-line: max-line-length
                path: '/student/all',
                title: 'All',
                icon: 'ft-users',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                // tslint:disable-next-line: max-line-length
                path: '/student/add',
                title: 'Add',
                icon: 'ft-user-plus',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
        ]
    },
    {
        // tslint:disable-next-line: max-line-length
        path: '',
        title: 'Directors',
        icon: 'icon-briefcase',
        class: 'has-sub',
        badge: '',
        badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1',
        isExternalLink: false,
        submenu: [

            {
                // tslint:disable-next-line: max-line-length
                path: '/director/all',
                title: 'All',
                icon: 'ft-users',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                // tslint:disable-next-line: max-line-length
                path: '/director/add',
                title: 'add',
                icon: 'ft-user-plus',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
        ]
    },
    {
        path: '/school/mySchool',
        title: 'My School',
        icon: 'icon-notebook',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    {
        path: '/school/mySchool/sites',
        title: 'My Sites',
        icon: 'icon-book-open',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    {
        path: '/school/mySchool/departments',
        title: 'My Departments',
        icon: 'icon-briefcase',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
];

const studentRoutes = [
    {
        // tslint:disable-next-line: max-line-length
        path: '/student/project',
        title: 'My Graduation Project',
        icon: 'icon-notebook',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
];

const superAdminRoutes = [
    {
        // tslint:disable-next-line: max-line-length
        path: '/school/all',
        title: 'Schools',
        icon: 'icon-notebook',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
];
export const ROUTES: RouteInfo[] = directorRoutes;
export const ROUTESADMIN: RouteInfo[] = adminRoutes;
export const ROUTESSUTDENT: RouteInfo[] = studentRoutes;
export const ROUTESSUPERADMIN: RouteInfo[] = superAdminRoutes;
/*[


    {
        path: '', title: 'Notifications', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [

            {
                path: '/notification/students', title: 'Student', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/notification/teachers', title: 'Teacher', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },
    {
        path: '', title: 'PfeFile', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [

            {
                path: '/pfefile/all', title: 'All', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/pfefile/accepted', title: 'Accepted', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },
    {
        path: '', title: 'School', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [

            {
                path: '/school/all', title: 'All', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },
    {
        path: '', title: 'Categorie', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [

            {
                path: '/categorie/all', title: 'All', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },
    {
        path: '', title: 'Students', icon: 'icon-graduation', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [

            {
                path: '/student/all', title: 'All', icon: 'ft-users', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/student/add', title: 'Add', icon: 'ft-user-plus', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
          
        ]
    },
    {
        path: '', title: 'Directors', icon: 'icon-briefcase', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [

            {
                path: '/director/all', title: 'All', icon: 'ft-users', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
        ]
    },
    {
        path: '/pfe/all', title: 'Graduation Projects', icon: 'icon-notebook', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },


];*/
