import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfig } from '../modal-config';
import { ModalcomponentComponent } from '../modalcomponent/modalcomponent.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pattern="[a-z]{4,10}" ;
  
 
 // BOOTSTRAP MODAL from modalcomponent
 modalConfig:ModalConfig=({modalTitle:"Error",dismissButtonLabel:"save",closeButtonLabel:"close"})
 @ViewChild('modal') private modalComponent: ModalcomponentComponent
async openModal() {
  return await this.modalComponent.open();
}
  
  //pattern1="[a-z0-9]";
form = new FormGroup({
  userName: new FormControl('',[Validators.required,Validators.pattern(this.pattern)]),
  password: new FormControl('',[Validators.required, Validators.minLength(4),Validators.pattern(this.pattern)])
})
 userName: string;
  password: string;
  isavailable;
  msg='';

  constructor(private router:Router,private modalService: NgbModal) { }

  ngOnInit(): void {
  }
 
get formControls(){
  return this.form.controls;
}

 login(){

  // if (this.form.invalid){
  //   return;
  // }

  //  var username=this.form.value.userName;
  // var password= this.form.value.password;

   
  if (this.userName == "admin" && this.password == "admin") {
    sessionStorage.setItem("userName",this.userName)
  // sessionStorage.setItem("userlogged","true");
    // localStorage.setItem("userName",username)
     this.router.navigate(['/home']);
    //return this.isavailable = true;
  //   sessionStorage.setItem("true",JSON.stringify(true))
  //    this.router.navigate(['/loginsuccess']);
   }
   else {
    //return this.isavailable = false;
    //  alert("invalid credentials"+ this.userName + this.password);
    //return this.msg="Invalid credentials, please enter valid username and password";
     this.openModal();
   }
 }
  

// logout(){
//   this.isavailable=false;
//   //this.router.navigateByUrl('/login');
// }
}
 