import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor() { }
  items = new BehaviorSubject<number[]>([1,2,3,4,5]) ;
  
  getitems()
  {
    // return this.items.asObservable();
    return this.items
  }

  pushOperation(item:number)
  {
    this.items.next([...this.items.value,item])
    console.log(...this.items.value)
  }

  popOperation(idx:number)
  {
    this.items.next(this.items.value.filter((v,i)=>i !== idx));

  }
}
