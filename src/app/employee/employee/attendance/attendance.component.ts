import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

export class Attendance {
  attendance: string = '';
  date: Date = new Date();
  currDate: Date = new Date();
  day: string = '';
  punchInTime: Date = new Date();
  punchOutTime: Date = new Date();
  lunchInTime: Date = new Date();
  lunchOutTime: Date = new Date();
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  constructor(private messageService: MessageService) { }
  attendance: string = 'Present';
  date: Date = new Date();
  currDate: Date = new Date();

  day: string = 'Full Day';
  punchInTime: Date = new Date();
  punchOutTime: Date = new Date();
  lunchInTime: Date = new Date();
  lunchOutTime: Date = new Date();

  stateOptions: any[] = [
    { label: 'Full Day', value: 'Full Day' },
    { label: 'Half Day', value: 'Half Day' }
  ];


  attCheck() {
    if (this.attendance != 'Present') {
      this.day = 'Full Day';
    }
  }
  ngOnInit(): void {

  }

  submitAttendance() {
    if (this.punchInTime == this.punchOutTime || this.punchInTime == this.lunchInTime || this.punchInTime == this.punchOutTime
      || this.punchOutTime == this.lunchInTime || this.punchOutTime == this.lunchOutTime ||
      this.lunchInTime == this.lunchOutTime) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Provide Valid Details.....' });
      return;
    }

    let att : Attendance = new Attendance();
    att.attendance = this.attendance;
    att.date = this.date;
    att.currDate = this.currDate;
  
    att.day = this.day;
    att.punchInTime = this.punchInTime ;
    att.punchOutTime = this.punchOutTime;
    att.lunchInTime = this.lunchInTime;
    att.lunchOutTime = this.lunchOutTime;
  }

}
