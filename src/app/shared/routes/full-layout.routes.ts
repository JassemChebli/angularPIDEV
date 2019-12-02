import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: 'changelog',
    loadChildren: './changelog/changelog.module#ChangeLogModule'
  },
  {
    path: 'full-layout',
    loadChildren: './pages/full-layout-page/full-pages.module#FullPagesModule'
  },
  {
    path: 'notification/students',
    loadChildren: './jassem/notification/student/notification-list/notification-list.module#NotificationListModule'
  },
  {
    path: 'notification/teachers',
    loadChildren: './jassem/notification/teacher/notification-list/notification-list.module#NotificationListModule'
  },
  {
    path: 'pfefile/accepted',
    loadChildren: './jassem/pfeFileOperation/accepted/accepted.module#AcceptedModule'
  },
  {
    path: 'pfefile/all',
    loadChildren: './iheb/pfeFile/all/all.module#AllModule'
  },
  {
    path: 'school/all',
    loadChildren: './iheb/school/all/all.module#AllModule'
  },
  {
    path: 'categorie/all',
    loadChildren: './wassim/categorie/all/all.module#AllModule'
  },
  {
    path: 'student',
    loadChildren: './khaled/student/student.module#StudentModule'
  },

];
