import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base=environment.baseUrl;
  token:any
  constructor(private http:HttpService) { this.token=localStorage.getItem('token') }

  Login(result:any)
  {
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.PostService(this.base+`User/UserLogin`, result, false, header)
  }

  Register(result:any)
  {
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.PostService(this.base+`User/UserRegistration`, result, false, header)
  }

  ForgetPassword(result:any)
  {
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.PostService(this.base+`User/ForgotPassword?email=`+result.email, {}, false, header)
  }

}
