import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

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
  loginAdmin(data:any){
    return this.http.post('http://127.0.0.1:8000/api/loginAdmin',data);
  }
  public name() {
    console.log(this.http.get('http://127.0.0.1:8000/api/name'))
    return this.http.get('http://127.0.0.1:8000/api/name');
  }
  
 }

