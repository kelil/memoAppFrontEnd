import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
 

  constructor(private http: HttpClient) { }

  getDivisions() {
    return this.http.get(environment.API+"/api/v1/divisions")
  }
}
