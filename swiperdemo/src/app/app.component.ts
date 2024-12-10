import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <swiper
    [config]="config"
    (swiper)="onSwiper($event)"
    (slideChange)="onSlideChange()"
  >
    <ng-template swiperSlide>Slide 1</ng-template>
    <ng-template swiperSlide>Slide 2</ng-template>
    <ng-template swiperSlide>Slide 3</ng-template>
    <ng-template swiperSlide>Slide 4</ng-template>
    <ng-template swiperSlide>Slide 5</ng-template>
    <ng-template swiperSlide>Slide 6</ng-template>
  </swiper>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swiperdemo';
  slides = [1, 2, 3, 4, 5]; // Example slides array
config: any;

}
