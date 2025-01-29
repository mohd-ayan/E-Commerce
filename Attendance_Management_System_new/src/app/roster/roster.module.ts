import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RosterComponent } from './roster.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateRosterModule } from './create-roster/create-roster.module';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: RosterComponent },
];
@NgModule({
  declarations: [RosterComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CreateRosterModule,
    ReactiveFormsModule
  ]
})
export class RosterModule { }
