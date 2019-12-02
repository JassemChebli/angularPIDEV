import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [


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
        path: '', title: 'Students', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [

            {
                path: '/student/all', title: 'All', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: '/student/add', title: 'Add', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
          
        ]
    },
    {
        path: '/full-layout', title: 'Operation 1', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    }


];
