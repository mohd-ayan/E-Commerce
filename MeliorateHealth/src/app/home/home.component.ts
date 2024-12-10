import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private viewportScroller: ViewportScroller, private router: Router) { }
  
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        if (url === '/home') {
          this.viewportScroller.scrollToAnchor('homeSection');
        } else if (url === '/about') {
          this.viewportScroller.scrollToAnchor('aboutSection');
        } else if (url === '/contact') {
          this.viewportScroller.scrollToAnchor('contactSection');
        }
      }
    });
  }

  scrollToSection(section: string): void {
    this.viewportScroller.scrollToAnchor(section);
  }

}
