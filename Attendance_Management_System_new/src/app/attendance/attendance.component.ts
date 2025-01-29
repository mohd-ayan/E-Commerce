import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  roster_Array:any;
  constructor(){
    this.roster_Array = JSON.parse(localStorage.getItem('Roaster_array')!);
  }
}
