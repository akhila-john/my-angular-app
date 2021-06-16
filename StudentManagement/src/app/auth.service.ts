import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
msg='';
   public isLoggedIn: boolean;
  // public username:string;

  constructor() { 
    // this.isLoggedIn=false;
  }
  
  // login(userName:string,password:string) {
  //   if(userName==="admin" && password==="admin"){
  //     sessionStorage.setItem('username',userName);
  //     this.isLoggedIn=true;
  //     this.username=userName;
  //   }
    
  //   this.msg="Invalid user credentials, please enter valid username and password";
    
  //    return of(this.isLoggedIn);
  // }

  isUserLoggedIn():boolean {
    
    return this.isLoggedIn;
  }

  logoutUser():void {
    this.isLoggedIn = false;
  }
  
}
