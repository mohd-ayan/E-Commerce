import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../datatype';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private sellerSer: SellerService,private router: Router) { }
  Islogin:boolean=false
  LoginIssueMessage:string=''
  ngOnInit(): void {
    this.sellerSer.reloadSeller()
    
  }

  signUP(data:SignUp)
  {
    this.sellerSer.SellerSignUp(data)
  }

  login(data:any)
  {
    this.sellerSer.LoginSeller(data)
    this.sellerSer.LoginIssuse.subscribe((result=>{
      if(result==true)
      {
        this.LoginIssueMessage = 'Invalid Email Or Password'
      }
    }))
  }

  showLogin()
  {
    this.Islogin = true
  }

  showSignUp()
  {
    this.Islogin = false
  }


}
