import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { UserServiceService} from '../user-service.service';
import {  
  NgForm,  
  FormBuilder,  
  FormGroup,  
  Validators,  
  FormControl,
  ReactiveFormsModule  
 } from '@angular/forms';  
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  showId =true;
  showFirstname = true;
  showdel = true;

  //  page = 1;
  //  limit = 4;
  //  pageSize =3;
  //  offset : any;

   first_name: any;
 
  displayedData:  Student[] = [];
  itemsPerPage: number=5;
  allPages: number;

 userdata: any = [];
 obj_s : Student = new Student();
  

// totalRecords: any;
// page:number=1;

  constructor(private objuser : UserServiceService,private router:Router) {
     
    
  }

  ngOnInit(): void {
    this.getalluserdetails();
  }

  getalluserdetails() {
    // this.offset = ((this.page-1)*this.pageSize);

    this.objuser. getuserdetails().subscribe((data) => {
      //  console.log(data);
     this.userdata = data;

      
         this.onPageChange();
       this.allPages = Math.ceil(this.userdata.length / this.itemsPerPage);

      
    });
  }

   onPageChange(page: number = 1): void {
       const startItem = (page - 1) * this.itemsPerPage;
      const endItem = page * this.itemsPerPage;
      this.displayedData = this.userdata.slice(startItem, endItem);
    }

    public getPageInNewSize(pageSize: number): void {
      this.itemsPerPage = pageSize;
      this.onPageChange();
      this.getalluserdetails(); 
    }

  //  onPageChange(event){
  //      this.page = event;
  //     this.getalluserdetails();
  //     this.displayedData = this.userdata;
  //  }

  

  

   deletecustomerdetails(student_id){
    this.objuser.deletestudentdetails(student_id);
        confirm("are u sure to delete")
        this.getalluserdetails();
       
       
      
    
   }

   loadnewcomponent(student_id: number){
     
     this.router.navigate(['editdetails',student_id]);
   }

  studentdetails(student_id: number){
    this.router.navigate(['viewdetails',student_id]);
  }
 
  
  search(){
    if (this.first_name ==""){
      this.ngOnInit();
    } else {
      this.displayedData = this.displayedData.filter(res => {
        return res.first_name.toLocaleLowerCase().match(this.first_name.toLocaleLowerCase());
      })
    }
  }

 
}
