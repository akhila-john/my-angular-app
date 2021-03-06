import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-new',
  templateUrl: './pagination-new.component.html',
  styleUrls: ['./pagination-new.component.css']
})
export class PaginationNewComponent implements OnChanges {

  @Input() totalRecords = 0;  
    @Input() recordsPerPage = 0;  
  
    @Output() onPageChange: EventEmitter<number> = new EventEmitter();  
    @Output() pageSizeEvent: EventEmitter<number> = new EventEmitter();  
  

    public pages: number [] = [];  
    activePage: number;
    private currentsize = 5;
  constructor() { }

  ngOnChanges(): any {
    const pageCount = this.getPageCount();  
      this.pages = this.getArrayOfPage(pageCount);  
      this.activePage = 1;  
      this.onPageChange.emit(1);  
  }

  private  getPageCount(): number {  
    let totalPage = 0;  

    if (this.totalRecords > 0 && this.recordsPerPage > 0) {  
      const pageCount = this.totalRecords / this.recordsPerPage;  
      const roundedPageCount = Math.floor(pageCount);  

      totalPage = roundedPageCount < pageCount ? roundedPageCount + 1 : roundedPageCount;  
    }  

    return totalPage;  
  }  

  private getArrayOfPage(pageCount: number): number [] {  
    const pageArray = [];  

    if (pageCount > 0) {  
        for(let i = 1 ; i <= pageCount ; i++) {  
          pageArray.push(i);  
        }  
    }  

    return pageArray;  
  }  

  onClickPage(pageNumber: number): void {  
      if (pageNumber >= 1 && pageNumber <= this.pages.length) {  
          this.activePage = pageNumber;  
          this.onPageChange.emit(this.activePage);  
      }  
  } 
  
  get pageSize():number {
    return this.currentsize;
  }

  set pageSize(size){
    this.currentsize = size;
    this.pageSizeEvent.emit(this.pageSize);
  }

  setSize(event): void{
    this.pageSize = event.target.value;
  }

}
