import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentManagement'
 


  checkvalue() {
    let  loginvalue= sessionStorage.getItem("userName");
       if(loginvalue==="admin"){
         return false;
       }
return true;
  }

}

