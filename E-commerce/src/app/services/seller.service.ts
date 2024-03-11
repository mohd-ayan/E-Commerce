import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { SignUp } from '../datatype';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }

  SellerSignUp(data:SignUp)
  {
    return this.http.post('http://localhost:3000/seller',data)
  }
}
