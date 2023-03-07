import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardserviceService {

  constructor() { }

  getToken(){
    return !!localStorage.getItem('token');
  }
}
