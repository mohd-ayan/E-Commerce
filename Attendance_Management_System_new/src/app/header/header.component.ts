import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  userInfo:any
  ismanager:boolean=false;
  isstaff:boolean=false;

  constructor(private authservice:AuthService){
    this.authservice.userInfo.subscribe((rs)=>{
      this.userInfo = rs;    
    })

    let manager = this.authservice.getManagerDetail();
    let staff = this.authservice.getStaffDetail();
    
    if(manager){
      this.ismanager = manager
    }else{
      this.isstaff = staff
    }
  }

  logout()
  {
    this.authservice.logout()
  }
}
