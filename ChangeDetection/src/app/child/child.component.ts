import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  
  @Input()  data:any

  fromchild:string='hello this is from the parent component'

  ngOnInit(): void {
  }

}
