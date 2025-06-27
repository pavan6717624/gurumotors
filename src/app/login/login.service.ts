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
    return this.http.post('http://localhost:8081/GMAPI/login', formData);
  }

}
