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

  ngOnInit(): void {
  }

  signUP(data:SignUp)
  {
    this.sellerSer.SellerSignUp(data).subscribe((result)=>{
      console.log(result)
      if(result)
      {
        this.router.navigate(['seller-home'])
      }
    })
  }

  check(data:object)
  {
    console.log(data)
  }

}
