import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css']
})
export class StudentNewComponent implements OnInit {

  // activePage:number = 0;  
  
  // displayActivePage(activePageNumber:number){  
  //   this.activePage = activePageNumber ;
  // }
totalvalue ;
  config: any;
  collection = {count:60, data:[]};
offset: any;
page:number =1;

// item = 0;
currentsize=5;

 

currentIndex=-1;
count = 60;
 pageSizes = [3,6,9];

 records :Student [] = [];


  showId =true;
  showFirstname = true;
  showdel = true;

userdata;
//  obj_s : Student = new Student();

  constructor(private objuser : UserServiceService,private router:Router) { }

  ngOnInit(): void {
  this.getallstudentdetails();
  this.getrecords();
  }

  getallstudentdetails(){
    this.offset = (this.page-1) * this.currentsize;
    this.objuser.getPage(this.currentsize,this.offset).subscribe(data =>{
      console.log(data);
      this.userdata = data;

      if (this.userdata != null && this.userdata.length > 0){
        this.collection.data = this.userdata;
      }

      
    })

   this.getrecords();

   
}

deletecustomerdetails(student_id){
  this.objuser.deletestudentdetails(student_id);
      confirm("are u sure to delete")
      this.getallstudentdetails();
}

pageChanged(event){
  this.page = event;
  this.getallstudentdetails();
}

getrecords(){
  
    const dataconfig$ = this.objuser.getuserdetails()
    dataconfig$.subscribe((data:any) =>{
     

      this.records = data ;
   this.totalvalue  = this.records.length;
    });
   

    
}

newPageSize(pageSize:number) {
this.currentsize = pageSize;
this.getallstudentdetails(); 
}
}
