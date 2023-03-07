import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpData:HttpClient) { }

  PostService(conn:string, data:any, token:boolean=false, httpOptions:any={}){
    return this.httpData.post(conn, data, token && httpOptions)
  }
  PutService(conn:string, data:any, token:boolean=true, httpOptions:any={}){
    return this.httpData.put(conn, data, token && httpOptions)
  }
  GetService(conn:string, token:boolean=true, httpOptions:any={}){
    return this.httpData.get(conn, token && httpOptions)
  }
  DeleteService(conn:string, token:boolean=true, httpOptions:any={}){
    return this.httpData.delete(conn, token && httpOptions)
  }

}
