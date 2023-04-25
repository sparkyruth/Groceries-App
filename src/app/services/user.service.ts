import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  

  // submitRegister(data: any): Observable<any> {
  //   console.log("At frontend...")
  //   return this.http.post<any>(`${environment.backendAPIUrl}/users/register`, data);
  // }
  submitRegister(data: any) {
    console.log("At frontend...")
    // return this.http.post<any>(`${environment.backendAPIUrl}/users/register`, data);
  }

  // login(data: any): Observable<any> {
  //   console.log("At frontend2...")
  //   return this.http.post<any>(`${environment.backendAPIUrl}/users/login`, data);
  // }
  login(data: any) {
    // console.log("At frontend2...")
    // return this.http.post<any>(`${environment.backendAPIUrl}/users/login`, data);
  }


  getUserName() {
    // return this.http.get('http://localhost:3000/users/username', {
    //   observe: 'body',
    //   params: new HttpParams().append('token', localStorage.getItem('token') as string)
    // });
  }

}