import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
api_url = "http://localhost:8080/WebAPI/rest/student";

api_urldel = "http://localhost:8080/WebAPI/rest/student/";
api_urlpost = "http://localhost:8080/WebAPI/rest/student/details";

  constructor(private http: HttpClient) { }
  
  getuserdetails() {
    return this.http.get(this.api_url  ) ;
    
  }

    getPage(limit:number,offset:number){
     return this.http.get(this.api_url+"?limit="+limit+"&offset="+offset );
   }


  getStudent(student_id: number): Observable<Student> {
    return this.http.get<Student>('${this.api_url}/${student_id}');
  }

  public postStudentdetails(obj_s: Student): Observable<Student> {
    return this.http.post<Student>(this.api_urlpost,obj_s,{
      headers:new HttpHeaders({
        'content-Type': 'application/json'
      })
    });
  }

   public deletestudentdetails(student_id: object) {
    return this.http.delete(this.api_urldel +student_id).subscribe(data => {
      console.log(data);
    
     });
   }

  
public getsinglecustomerdetails(student_id: number){
    return this.http.get(this.api_urldel + student_id);
  }

  public updatestudentdetails(student_id: object,updaterecords: object){
    this.http.put(this.api_urldel +student_id, updaterecords).subscribe(data =>{
      console.log(data);
    });
  }

  
}
