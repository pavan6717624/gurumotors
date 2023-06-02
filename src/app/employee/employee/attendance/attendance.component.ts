import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  constructor() { }
  attendance: string='Present';
  date: Date=new Date();
  currDate: Date=new Date();
  
  day: string='Full Day';
  punchInTime: Date=new Date();
  punchOutTime: Date=new Date();
  lunchInTime: Date=new Date();
  lunchOutTime:Date=new Date();

  stateOptions: any[] = [
    { label: 'Full Day', value: 'Full Day' },
    { label: 'Half Day', value: 'Half Day' }
];


attCheck()
{
  if(this.attendance!='Present')
  {
    this.day='Full Day';
  }
}
  ngOnInit(): void {
   
  }

}
