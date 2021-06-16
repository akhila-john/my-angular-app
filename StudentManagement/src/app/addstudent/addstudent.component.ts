import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfig } from '../modal-config';
import { ModalcomponentComponent } from '../modalcomponent/modalcomponent.component';
import { Student } from '../student';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  obj_s : Student = new Student();
  userdata;

  closeResult = '';

  // BOOTSTRAP MODAL from modalcomponent
 modalConfig:ModalConfig=({modalTitle:"done",dismissButtonLabel:"save",closeButtonLabel:"close"})
 @ViewChild('modal') private modalComponent: ModalcomponentComponent
async openModal() {
  return await this.modalComponent.open()
}
  
  constructor(private objuser : UserServiceService,private router:Router,private modalService: NgbModal) { }

  ngOnInit(): void {
  }

   getalluserdetails() {
     this.objuser.getuserdetails().subscribe((data) => {
       this.userdata = data;
    });
   }

  SaveCustomerdata() {
    this.objuser.postStudentdetails(this.obj_s).subscribe(
      (data : Student) =>
      console.log(data)
    );
    // alert(this.obj_s.first_name + "details saved successfully")
    this.getalluserdetails();
    this.openModal();
  }


// part of the bootstrap modal from addstudent.html

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
}

