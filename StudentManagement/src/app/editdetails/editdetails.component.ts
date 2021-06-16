import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent implements OnInit {
  student_id;
  userdata;
//  @Input() student:Student;
//  userdata= null;
  constructor(private objUser:UserServiceService,public router :ActivatedRoute) { }

  ngOnInit(): void {
     this.assignvaluetoid();
     this.loadcustomerdata();
  //  this.updatecustomerdata();
  
  }
  assignvaluetoid(){
    this.router.params.subscribe(params => {
      this.student_id = params['student_id'];
    });
  }
  loadcustomerdata(){
    this.objUser.getsinglecustomerdetails(this.student_id).subscribe((data: any[]) => {
      console.log(data);
      this.userdata = data;
    })
  }

  updatecustomerdata(){
    this.objUser.updatestudentdetails(this.student_id, this.userdata);
    alert(this.userdata.first_name + "saved");
  }

  // updatecustomerdata(): void {
  //   this.objUser.updatestudentdetails(this.userdata.student_id, this.userdata)
  //   alert(this.userdata.first_name + "saved");
  // }

}
