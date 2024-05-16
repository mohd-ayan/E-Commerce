import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  SellerLogin:String='default'
  constructor(private Router:Router) { }

  ngOnInit(): void {
    this.Router.events.subscribe((result:any)=>{
      if(result.url)
      {
        if(localStorage.getItem('seller') && result.url.includes('seller'))
        {
          this.SellerLogin='seller'
        }
        else
        {
          this.SellerLogin = 'default'
        }
      }
    })
  }


}
