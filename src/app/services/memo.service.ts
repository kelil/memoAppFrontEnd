import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemoService {
  

  constructor(private http: HttpClient) { }

  createMemo(data: any): Observable<any>{
    return this.http.post(environment.API+"/api/v1/memos/memo",data)
  }
  getMemos(){
    return this.http.get(environment.API+"/api/v1/memos")
  }

  generateMemo(data: any): Observable<Blob>{
    return this.http.post(environment.API+"/api/v1/memos/generateMemo",data, {responseType: 'blob'})
  }
}
