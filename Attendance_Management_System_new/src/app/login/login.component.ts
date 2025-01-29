import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  username = '';
  password = '';

  constructor(private fb: FormBuilder,private router: Router,private authService: AuthService) {    
    this.loginForm = this.fb.group({
      username: ['', Validators.required], 
      password: ['', Validators.required], 
    });
  }
  
  Login() {
    const Validate_Admin = {
      username: 'admin',
      password: '12345',
    };

    if (this.loginForm.get('username')?.value === Validate_Admin.username && this.loginForm.get('password')?.value === Validate_Admin.password) {
        this.authService.login();
        let user = this.authService.getManagerDetail();
        this.authService.userInfo.next(user);
        this.router.navigate(['/dashboard']);
    }
    else
      {
        let userInfo = JSON.parse(localStorage.getItem('Roaster_array')!)
        let isAvail = userInfo.find((item:any)=>item.name === this.loginForm.get('username')?.value && item.password || '12345' === this.loginForm.get('password')?.value)
          if(isAvail){
            let data = userInfo.find((item:any)=>{
              if(item.name === this.loginForm.get('username')?.value){
                return item;
              }
          })
        
          this.authService.isStaffLogin()
          let user = this.authService.getStaffDetail();
          localStorage.setItem('userInfo',JSON.stringify(data))
          this.authService.userInfo.next(user)
          this.router.navigate(['/shift']);
        }else{
          alert('Invalid User')
        }
      } 
  }
}
