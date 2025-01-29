import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Subject } from 'rxjs';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-staff-attendance',
  templateUrl: './staff-attendance.component.html',
  styleUrls: ['./staff-attendance.component.css']
})
export class StaffAttendanceComponent {
  userInfo:any;
  attendanceList:any = {};
  isWebcameShow:boolean=false;
  capturedImage: string | null = null;
  private trigger = new Subject<void>();

  constructor(private authservice:AuthService){
    this.userInfo = this.authservice.getStaffDetail()
    this.getStaff()
    
  }
  
  getStaff(){
    this.attendanceList = JSON.parse(localStorage.getItem('userInfo')!)
  }
  get triggerObservable() {
    return this.trigger.asObservable();
  }

  captureImage() {
    this.trigger.next();
    this.isWebcameShow = false;
  }

  handleImage(webcamImage: WebcamImage) {
    this.capturedImage = webcamImage.imageAsDataUrl;
    let Roaster_array = JSON.parse(localStorage.getItem('Roaster_array')!)
    const index = Roaster_array.findIndex((item: any) => item.id === this.attendanceList.id);
    
    if (index !== -1) {
      Roaster_array[index] = { ...Roaster_array[index], time: new Date(),status: 'Present', image: this.capturedImage };
      localStorage.setItem('Roaster_array', JSON.stringify(Roaster_array));
      localStorage.setItem('userInfo', JSON.stringify({...this.attendanceList ,time: new Date(),status: 'Present', image: this.capturedImage}));
    }
    this.getStaff()
}
}
