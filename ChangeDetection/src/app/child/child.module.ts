import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from './child-routing.module';

console.log('child module loads')

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChildRoutingModule
  ]
})
export class ChildModule { }
