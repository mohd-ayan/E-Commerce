import { Component, OnInit } from '@angular/core';
import { CheckService } from './Services/check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:any;
  newValue :any;
  constructor(public ser:CheckService)
  {
    this.title = this.ser.getitems().asObservable()
    
    this.title.subscribe((ele:any)=>{
      console.log(ele)
    })
    // this.ser.getitems().subscribe(ele=>{
    //   this.title = ele
    // })
  }


}
