import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../student';


// interface IData {
//   useId: number;
//   id: number;
//   title: string;
//   body: string;
// }

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css']
})
export class EmergencyContactComponent implements OnInit {
   postsData: any = [];
   
  fetchedData:  Student[] = [];
  displayedData:  Student[] = [];
  itemsPerPage: number = 5;
  allPages: number;
  
  constructor(private http: HttpClient) {
    this.fetchData();
   }

  ngOnInit(): void {
  }

  fetchData(): void {
    const dataConfig$ = this.http.get('http://localhost:8080/WebAPI/rest/student');
    dataConfig$.subscribe((data: any) => {
        this.fetchedData = data;
        this.onPageChange();
        this.allPages = Math.ceil(this.fetchedData.length / this.itemsPerPage);
      }
    );
  }

  onPageChange(page: number = 1): void {
    const startItem = (page - 1) * this.itemsPerPage;
    const endItem = page * this.itemsPerPage;
    this.displayedData = this.fetchedData.slice(startItem, endItem);
  }

}
