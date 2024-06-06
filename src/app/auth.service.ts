import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  //khai báo hàm đăng ký
  register=(data:any) => {
    return this.http.post(this.apiUrl + '/register',data);
  }

  //khai báo hàm đăng nhập
  login=(data:any): Observable<any> => {
    return this.http.post(this.apiUrl + '/login', data);
  }
}
