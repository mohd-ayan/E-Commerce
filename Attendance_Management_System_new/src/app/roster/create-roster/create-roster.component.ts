import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RosterModel } from '../roster.component';

@Component({
  selector: 'app-create-roster',
  templateUrl: './create-roster.component.html',
  styleUrls: ['./create-roster.component.css']
})
export class CreateRosterComponent {

  rosterForm: FormGroup;
  rosters:Array<RosterModel>=[]


  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateRosterComponent>,
    @Inject(MAT_DIALOG_DATA) public Roster_data: any) {
    this.rosterForm = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      start_time: ['', Validators.required],
      end_time: ['', Validators.required],
      id: [''],
      image: [''],
      status: [''],
      password: ['12345'],
      });
    const data = localStorage.getItem('Roaster_array')
    if (data) {
      this.rosters = JSON.parse(data);
    } else {
      this.rosters = [];
    }
    if (this.Roster_data?.flag == 'Edit') {
      this.editRoster()
    }
  }

  onSubmit() {
    if (this.rosterForm.valid) {
      const last_index_Id = this.rosters[this.rosters.length - 1].id
      const data = { ...this.rosterForm.value, id: last_index_Id + 1 }
      this.rosters = [...this.rosters, data]
      localStorage.setItem('Roaster_array', JSON.stringify(this.rosters))
      this.rosterForm.reset();
    }

    this.dialogRef.close()
  }

  addRoster(){
    let arr = JSON.parse(localStorage.getItem('Roaster_array')!) || [];
    this.rosterForm.get('id')?.setValue(this.generateId());
    arr.push(this.rosterForm.value)
    localStorage.setItem('Roaster_array',JSON.stringify(arr))
    this.dialogRef.close()
  }

  generateId() {
    let id = new Date().getTime() % 10000;
    return id 
  }
  editRoster() {  
    this.rosterForm.get('name')?.setValue(this.Roster_data?.roster?.name)
    this.rosterForm.get('date')?.setValue(this.Roster_data?.roster?.date)
    this.rosterForm.get('start_time')?.setValue(this.Roster_data?.roster?.start_time)
    this.rosterForm.get('end_time')?.setValue(this.Roster_data?.roster?.end_time)
  }

  updateRoster() {
    let updatedRoster = this.rosterForm.value;
    updatedRoster = { ...updatedRoster, id: this.Roster_data?.roster?.id }

    const Index = this.rosters.findIndex((item: any) => {
      return this.Roster_data?.roster?.id == item.id

    })
    if (Index !== -1) {
      this.rosters[Index] = updatedRoster;
      localStorage.setItem('Roaster_array', JSON.stringify(this.rosters));
    } else {
      console.error('Roster with the given id not found.');
    }
    this.dialogRef.close()
  }

}
