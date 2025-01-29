import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateRosterComponent } from './create-roster/create-roster.component';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent {

  rosterForm: FormGroup;
  rosters:Array<RosterModel>=[]

  constructor(private fb: FormBuilder,private dialog: MatDialog) {
    this.rosterForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      id: ['', Validators.required],
      image: ['', Validators.required],
      status: ['', Validators.required],
    });
    this.get_Roster_from_Local()
  }

  get_Roster_from_Local()
  {
    const data  = localStorage.getItem('Roaster_array')
    if (data) {
      this.rosters = JSON.parse(data);
    } else {
      this.rosters = [];
    }
  }


  editRoster(roster: any) {
    this.dialog.open(CreateRosterComponent,{
      data:{
        flag:'Edit',
        roster
      }
    }).afterClosed().subscribe(res=>{
      const data  = localStorage.getItem('Roaster_array')
    if (data) {
      this.rosters = JSON.parse(data);
    } else {
      this.rosters = [];
    }
    })
  }

  updateRoster() {
    const updatedRoster = this.rosterForm.value;
    const data = JSON.parse(localStorage.getItem('Roaster_array')!);
    let rosters = data || [];

    const index = rosters.findIndex((item: any) => item.id === updatedRoster.id);

    if (index !== -1) {
      rosters[index] = updatedRoster;

      localStorage.setItem('Roaster_array', JSON.stringify(rosters));
    } else {
      console.error('Roster with the given id not found.');
    }
  }

  deleteRoster(i: any) {
    this.rosters.splice(i,1)
    localStorage.setItem('Roaster_array',JSON.stringify(this.rosters))
    this.get_Roster_from_Local()
  }

  OpenCreateDialog()
  {
    this.dialog.open(CreateRosterComponent,{
    }).afterClosed().subscribe(res=>{
      const data  = localStorage.getItem('Roaster_array')
    if (data) {
      this.rosters = JSON.parse(data);
    } else {
      this.rosters = [];
    }
    })
  }
}


export interface RosterModel{
  id:number ,
  name: string;
  date: string,
  start_time:string,
  end_time:string
}
