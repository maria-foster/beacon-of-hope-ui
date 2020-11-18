import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Thread } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  url = "http://remote-rookies-api.eastus2.cloudapp.azure.com:5500/api/v1/threads"

  constructor(private http: HttpClient) {}
  httpOptions = {
   headers: new HttpHeaders({
     'Access-Control-Allow-Origin': '*',
   })
 };
 
 createNewThread(data) : any {
   return this.http.post<Thread>(this.url, data, this.httpOptions);
 }

 updateThread(id, data) : any {
   return this.http.put<Thread>(this.url + "/" + id, data, this.httpOptions);
 } 

 getThread(id) : any {
   return this.http.get<Thread>(this.url +  "/" + id, this.httpOptions);
 }

 getThreads() : any {
  return this.http.get<[Thread]>(this.url, this.httpOptions);
}
 getThreadsByCategory(category) : any {
  return this.http.get<[Thread]>(this.url +  "/findByCategory/" + category, this.httpOptions);
}
getThreadsByUser(id) : any {
  return this.http.get<[Thread]>(this.url +  "/findByUser/" + id, this.httpOptions);
}

}
