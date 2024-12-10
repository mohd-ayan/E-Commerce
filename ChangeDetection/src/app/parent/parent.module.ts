import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
console.log('parent module loads');

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ParentRoutingModule,
    FormsModule
  ],
  providers:[ApiService]
})
export class ParentModule { }
