import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:5500/api/v1/users"

  constructor(private http: HttpClient) {}
  httpOptions = {
   headers: new HttpHeaders({
     'Access-Control-Allow-Origin': '*',
   })
 };
 
 createNewUser(data) : any {
   return this.http.post<User>(this.url, data, this.httpOptions);
 }

 updateUser(id, data) : any {
   return this.http.put<User>(this.url + "/" + id, data, this.httpOptions);
 } 

 getUser(id) : any {
   return this.http.get<User>(this.url +  "/" + id, this.httpOptions);
 }

 updateInterviews(id, data) : any {
   return this.http.put<User>(this.url +  + "update/interviews/" + id, data, this.httpOptions);
 }
}
