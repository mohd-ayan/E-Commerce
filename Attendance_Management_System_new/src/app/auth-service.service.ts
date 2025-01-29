import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private is_Staff_login = false;
  userInfo = new BehaviorSubject<any>({})
  constructor() {}

  login()
  {
    this.isAuthenticated = true;
    localStorage.setItem('isAuthenticated', 'true');
  }

  logout()
   {
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('is_Staff');
    localStorage.removeItem('Manager');
    localStorage.removeItem('Staff');
  }

  isAuthenticatedUser() 
  {
    return this.isAuthenticated || localStorage.getItem('isAuthenticated') === 'true' || localStorage.getItem('is_Staff') === 'true';
  }

  isStaffLogin()
  {
    this.is_Staff_login = true
    localStorage.setItem('is_Staff','true')
  }

  getManagerDetail(){
    return JSON.parse(localStorage.getItem('isAuthenticated')!);
  }

  getStaffDetail(){
    return JSON.parse(localStorage.getItem('is_Staff')!);
  }
}
