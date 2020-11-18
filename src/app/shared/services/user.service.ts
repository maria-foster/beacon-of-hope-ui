import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://remote-rookies-api.eastus2.cloudapp.azure.com:5500/api/v1/users"

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
 getUserByZipcode(zipcode) : any {
  return this.http.get<[User]>(this.url +  "/findByZipCode/" + zipcode, this.httpOptions);
}
getUserByAge(age) : any {
  return this.http.get<[User]>(this.url +  "/findByAge/" + age, this.httpOptions);
}
}
