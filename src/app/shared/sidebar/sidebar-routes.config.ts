import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    
    {
        path: '', title: 'Notifications', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            
            {
                path: '/notification/students', title: 'Student', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false,
                submenu: []
            },
            {
                path: '/notification/teachers', title: 'Teacher', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false,
                submenu: []
            }
        ]
    },
    {
        path: '/full-layout', title: 'Operation 1', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/full-layout', title: 'Operation 2', icon: 'ft-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/notification/student', title: 'Operation 3', icon: 'ft-folder', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    }
    

];
