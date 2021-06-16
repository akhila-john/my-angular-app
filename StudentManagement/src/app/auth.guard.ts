import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router,private authService:AuthService) {
       
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean  {
      if(sessionStorage.getItem('userName')==="user"){
        this.router.navigate(['/login'] );
        return false;
      }
      
    return true;
  }
  
}

