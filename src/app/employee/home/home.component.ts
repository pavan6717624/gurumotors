import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private deviceService: DeviceDetectorService, private route: Router) { }
  menuItems = [{ label: 'Home', icon: 'pi pi-home', routerLink: '/employee/home' }, 
  { label: 'Attendance', icon: 'pi pi-home', routerLink: '/employee/attendance' },

  { label: 'Reports', icon: 'pi pi-chart-bar', routerLink: '/employee/reports' }
];
  isMobile = false;
  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }

  toHome() {
    this.route.navigate(['home']);
  }

}
