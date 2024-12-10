import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

   url ='https://dummyjson.com/products?id='

   getdata()
   {
    return this.http.get(this.url)
   }


   postdata(data:any){
    console.log(data);
    
    const headers  = new HttpHeaders({'Content-Type':'application/json'})
    return this.http.post(this.url,data,{headers})
   }

  constructor(private http:HttpClient) { }
}
