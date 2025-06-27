import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './users/employees/employees.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get('http://localhost:8081/GMAPI/getEmployees');  
  }
  addEmployee(user: User) {
    return this.http.post('http://localhost:8081/GMAPI/addEmployee',user);  
  }
}
