import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfig } from '../modal-config';
import { ModalcomponentComponent } from '../modalcomponent/modalcomponent.component';
import { Student } from '../student';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
   usersdata ;
   student_id;


   modalConfig:ModalConfig=({modalTitle:"done",dismissButtonLabel:"save",closeButtonLabel:"close"})
 @ViewChild('modal') private modalComponent: ModalcomponentComponent
async openModal() {
  return await this.modalComponent.open()
}

  //  userdata;
//student :Student;
 // @Input() student : Student;
 // student_id : number;
  

  constructor(private route: ActivatedRoute,private activatedRoute: ActivatedRoute,
    private objUser:UserServiceService,private modalService: NgbModal ) { }

  ngOnInit(): void {
  // this.getStudent(this.route.snapshot.paramMap.get('student_id'));
  
     this.assignvaluetoid();
     this.loadcustomerdata();

  }

//  getStudent(student_id): void {
  //     this.objUser.getsinglecustomerdetails(student_id).subscribe(student =>{
//       this.usersdata = student
//     }
//      );
//  }



 assignvaluetoid(){
  this.route.params.subscribe(params => {
    this.student_id = params['student_id'];
  });
}
loadcustomerdata(){
  this.objUser.getsinglecustomerdetails(this.student_id).subscribe((data: any[]) => {
    console.log(data);
    this.usersdata = data;
  })
}

updatecustomerdata(){
  this.objUser.updatestudentdetails(this.student_id, this.usersdata);
  //alert(this.usersdata.first_name + "updated successfully");
  this.openModal();
}
}
