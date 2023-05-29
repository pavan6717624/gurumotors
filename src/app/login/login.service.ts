import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  login(formData: FormData): Observable<any>
  {
    return this.http.post('https://takeoff-pavan.herokuapp.com/GMAPI/login', formData);
  }

}
