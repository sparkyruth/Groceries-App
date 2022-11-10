import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // submitRegister(body:any){
  //   return this.http.post('http://localhost:3000/users/register', body,{
  //     observe:'body'
  //   });
  // }

  submitRegister(data: any): Observable<any> {
    console.log("At frontend...")
    return this.http.post<any>(`${environment.backendAPIUrl}/users/register`, data);
  }

  login(body:any){
    return this.http.post('http://localhost:3000/users/login', body,{
      observe:'body'
    });
  }

  getUserName() {
    return this.http.get('http://localhost:3000/users/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token') as string)
    });
  }

}