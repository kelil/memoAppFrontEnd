import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const AUTH_API = environment.API+'/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  constructor(private http: HttpClient) { }
  login(userName: string, password: string): Observable<any> {
    console.log(password)
    return this.http.post(
      AUTH_API + 'signin',
      {
        userName,
        password,
      },
      httpOptions
    );
  }
  register(userName: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        userName,
        email,
        password,
      },
      httpOptions
    );
  }
  logout() {
    return this.http.post(AUTH_API + 'signout', {}, httpOptions);
  }
}