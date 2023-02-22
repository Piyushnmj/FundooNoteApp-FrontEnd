import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardserviceService } from '../Services/authservice/authguardservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private authguardservice:AuthguardserviceService, private route:Router) { }

  canActivate(): boolean{
    if(!this.authguardservice.getToken()){
      this.route.navigateByUrl("/login")
    }
    return this.authguardservice.getToken();
  }

}
