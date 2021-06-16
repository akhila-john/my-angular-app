import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  success: boolean;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  
  user1= sessionStorage.getItem("userName");

loggedIn(){
var loginvalue= sessionStorage.getItem("userName");
// let  loginvalue= sessionStorage.getItem("userName");

if(loginvalue==="admin"){
  return true;
}
return false;
// this.success = JSON.parse(retreived);
// return this.success;
}

  logout(){
    sessionStorage.clear();
    this.authService.logoutUser();
    this.router.navigate(['login']);
  }
}
