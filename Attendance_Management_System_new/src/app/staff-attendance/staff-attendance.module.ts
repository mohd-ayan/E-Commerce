import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffAttendanceComponent } from './staff-attendance.component';
import { RouterModule, Routes } from '@angular/router';
import { WebcamModule } from 'ngx-webcam';

const routes : Routes =[
  {
    path:'',
    component:StaffAttendanceComponent
  }
]
@NgModule({
  declarations: [StaffAttendanceComponent],
  imports: [
    CommonModule,
    WebcamModule,
    RouterModule.forChild(routes)
  ]
})
export class StaffAttendanceModule { }
