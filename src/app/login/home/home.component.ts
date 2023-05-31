import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService, private messageService: MessageService) { }
  user: string = '';
  password: string = '';
  waitStatus: boolean = false;



  ngOnInit() {

  }


  login() {
    var formData = new FormData();
    if (this.user == null || this.user.trim().length == 0 || this.password == null || this.password.trim().length == 0) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Provide Valid Credientails.....' });
      return;

    }
    formData.set('contact', this.user);
    formData.set('password', this.password);
    this.waitStatus = true;
    this.loginService.login(formData).subscribe(

      (res:any) => {
        if (res.loginStatus) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successful' });
          this.router.navigate([(res.userType+'').toLowerCase()]);
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Login Failed. Try Again...' });
        }
        console.log(res); this.waitStatus = false;
      },
      (err) => { console.log(err); this.waitStatus = false; this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Sorry! Server Busy..Try Again..' }); },


    );
  }

}
