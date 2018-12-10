import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getUserDetails(username, password){
    return this.http.post("/api/users",{
        username, password }).subscribe(data=>{
        console.log(data, " this is what was received");
      });
  }

}
