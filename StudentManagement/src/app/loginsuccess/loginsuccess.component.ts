import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  pattern="[a-z]{4,10}" ;
  
  //pattern1="[a-z0-9]";
form = new FormGroup({
  userName: new FormControl('',[Validators.required,Validators.pattern(this.pattern)]),
  password: new FormControl('',[Validators.required, Validators.minLength(4),Validators.pattern(this.pattern)])
})
  userName: string;
  password: string;
  isSubmitted = false;
  // isavailable= false;
  @Input() msg='';
  url: string="admin";

  constructor(private authService:AuthService,public router: Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.url = params.get('url');
      console.log('LoginsuccessComponent/ngOnInit'+this.url);
    })
  }

  // login(loginForm) {
    
  //   // sessionStorage.setItem('username', this.userName);
  //   // sessionStorage.setItem('password',this.password);
    
  //   this.authService.login(loginForm.value.userName,loginForm.value.password).subscribe(data=> {
  //     console.log('return to'+ this.url );
  //     if(this.url!=null){
  //       // sessionStorage.clear(); 
  //       this.router.navigate([this.url]);
  //     }else {
  //       this.router.navigate(['/loginsuccess']);
  //     }
  //   });
  //  }
}
