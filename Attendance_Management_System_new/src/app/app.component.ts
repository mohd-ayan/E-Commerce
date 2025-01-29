import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Attendance-Management-System';
  constructor(private authService: AuthService, private router: Router) {}

  isAuthenticated() {
    return this.authService.isAuthenticatedUser();
  }

  
  isLoginRoute() {
    return this.router.url === '/login';
  }
}
