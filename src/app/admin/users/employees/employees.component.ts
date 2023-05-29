import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AdminService } from '../../admin.service';
export class User {
  id: number = 0;
  name: string = '';
  contact: number = 0;
  email: string = "";
  city: string = "";
  message: string = "";

  loginId: number = 0;

  roleName: string = "";
}
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  users: User[] = [];
  constructor(private adminService: AdminService, private deviceService: DeviceDetectorService) { }
  visible=false;

  isMobile = false;

  waitStatus=false;
  name: string = '';
  contact: number = 0;
  email: string = "";
  city: string = "";
  message: string = "";
  roleName: string = "";


  
  
  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    this.getUsers();
  }
  getUsers()
  {
    this.adminService.getEmployees().subscribe(
      (res : any) => {this.users=res; console.log(res);},
      (err) => {console.log(err);}
    );
  }
  addEmployee()
  {
      this.waitStatus=true;
      let user: User = new User();
      user.name=this.name;
      user.city=this.city;
      user.contact=this.contact;
      user.email=this.email;
      user.message= this.message;
      user.roleName = "Employee";

      this.adminService.addEmployee(user).subscribe(
        (res : any) => {this.users=res; console.log(res); this.visible=false; this.waitStatus=false;},
        (err) => {console.log(err);  this.waitStatus=false; this.visible=false;}
      );
  }
}
