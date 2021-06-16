import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car';
import { Student } from '../student';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-table-reuse',
  templateUrl: './table-reuse.component.html',
  styleUrls: ['./table-reuse.component.css']
})
export class TableReuseComponent implements OnInit {

  // first_name ="";
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


gridData: any[];
colData= [
  { field:'student_id', header:'student id'},
  { field: 'first_name',header: 'first name'},
   { field: 'last_name', header:'last name'}
];
 
  constructor(private objuser : UserServiceService,private router:Router) { }

  ngOnInit(): void {
    this.loadGrid();
    this.getrecords();
  }

  loadGrid(){
    this.offset = (this.page-1) * this.currentsize;
    this.objuser.getPage(this.currentsize,this.offset).subscribe((data: any[]) =>{
      console.log(data);
      this.gridData = data;

      if (this.gridData != null && this.gridData.length > 0){
        this.collection.data = this.gridData;
      }

      
    })

   this.getrecords();

  //   this.objuser.getuserdetails().subscribe((data: any[]) => {
  //     this.gridData = data;
  //   })
  // }


}


pageChanged(event){
  this.page = event;
  this.loadGrid();
}

getrecords(){
  
  const dataconfig$ = this.objuser.getuserdetails()
  dataconfig$.subscribe((data:any) =>{
   

    this.records = data ;
 this.totalvalue  = this.records.length;
  });
 }

 deletecustomerdetails(record: any){
   this.objuser.deletestudentdetails(record.student_id);
     confirm("are u sure to delete")
       this.loadGrid();
}


 newPageSize(pageSize:number) {
  this.currentsize = pageSize;
  this.loadGrid(); 
  }

  rowSelection(record: Student){
    this.router.navigate(['/viewdetails/', record.student_id]);
  }


  //  search(){
  //   if (this.first_name ==""){
  //     this.ngOnInit();
  //   } else {
  //     this.gridData = this.gridData.filter(res => {
  //       return res.first_name.toLocaleLowerCase().match(this.first_name.toLocaleLowerCase());
  //     })
  //   }
  // }

}