import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  constructor() { }
  attendance: string='';

  stateOptions: any[] = [
    { label: 'Full Day', value: 'Full Day' },
    { label: 'Half Day', value: 'Half Day' }
];

  ngOnInit(): void {
  }

}
