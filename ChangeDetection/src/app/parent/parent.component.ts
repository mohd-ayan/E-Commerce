import { Component, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup ,FormControlName} from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  nameForm:FormGroup |any
  constructor(private ser: ApiService,private fb:FormBuilder) {}
  
  parentdata:String='this is parent data'
  Arraydata:Array<any>=[]
  @Output() share:any
  ngOnInit(): void {
    this.callapi()
    this.callpostApi(1)
    this.nameForm = this.fb.group({
      name:[''],
      email:['']
    })
  }

  submit()
  {
    console.log(this.nameForm.get('name').value);
    console.log(this.nameForm.get('email').value);
    
  }

  callapi()
  {
    this.ser.getdata().subscribe((res:any)=>{
      console.log(res?.products);  
      this.Arraydata = res?.products    
    },
    (error)=>{
      console.error('error',error)
    }
      )
  }

  callpostApi(data:any)
  {
    this.ser.postdata(data).subscribe((res)=>{
      if(res)
      {
        console.log('post data->',res)
      }
    },(error)=>{
      console.log(error)
    })
  }
  onSubmit(form:any)
  {
    console.log(form.value);
    
  }

}
