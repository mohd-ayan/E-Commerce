import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, },
  {
    path:'roster',
    loadChildren: () => import('./roster/roster.module').then(m=>m.RosterModule),
    canActivate:[AuthGuard]
  },
  {
    path:'header',
    loadChildren: () => import('./header/header.module').then(m=>m.HeaderModule),
    canActivate:[AuthGuard]
  },
  {
    path:'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule),
    canActivate:[AuthGuard]
  },
  {
    path:'attendance',
    loadChildren: () => import('./attendance/attendance.module').then(m=>m.AttendanceModule),
    canActivate:[AuthGuard]
  },
  {
    path:'shift',
    loadChildren: () => import('./staff-attendance/staff-attendance.module').then(m=>m.StaffAttendanceModule),
    canActivate:[AuthGuard]
  },
  // { path: 'roster', component: RosterComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
