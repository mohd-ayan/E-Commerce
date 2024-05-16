import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SignUp, login } from '../datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  LoginIssuse = new EventEmitter<boolean>(false)
  constructor(private http: HttpClient,private Route: Router) { }

  SellerSignUp(data: SignUp) {
    this.http.post('http://localhost:3000/seller', data, { observe: 'response' }).subscribe((result => {
      console.log(result)
      this.isSellerLoggedIn.next(true)
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.Route.navigate(['seller-home'])
    }))
  }

  reloadSeller()
  {
    if(localStorage.getItem('seller'))
    {
      this.isSellerLoggedIn.next(true)
      this.Route.navigate(['seller-home'])
    }
  }


  LoginSeller(data:login)
  {
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{
    if(result && result.body && result.body.length)
      {
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.Route.navigate(['seller-home'])              
      }
      else
      {      
        this.LoginIssuse.emit(true) 
      }
    })
    
  }

}
