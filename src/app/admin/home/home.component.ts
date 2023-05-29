import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private deviceService: DeviceDetectorService, private route: Router) { }
  menuItems = [{ label: 'Home', icon: 'pi pi-home', routerLink: '/admin/home' }, {
    label: 'Users', icon: 'pi pi-users',

    items: [{
      label: 'Employees',
      icon: 'pi pi-user', routerLink: '/admin/employees'},

      {
        label: 'Managers',
        icon: 'pi pi-user', routerLink: '/admin/employees'
      },
     ]


  },

  { label: 'Dashborad', icon: 'pi pi-chart-bar', routerLink: 'dashboard' }
];
  isMobile = false;
  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
  }

  toHome() {
    this.route.navigate(['home']);
  }

}
