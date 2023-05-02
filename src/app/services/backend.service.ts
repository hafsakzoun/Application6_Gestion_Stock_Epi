import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient)
  { }
  signup(data:any){
    return this.http.post('http://127.0.0.1:8000/api/signup',data);

  }
  login(data:any){
    return this.http.post('http://127.0.0.1:8000/api/login',data);
  }
  getUserName(userId: number): Observable<any> {
    const url = `http://127.0.0.1:8000/api/users/${userId}/name`; // replace with your actual API endpoint
    return this.http.get<any>(url);
 }
}
