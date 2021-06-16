import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';




@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() itemsPerPage: number;
  @Input() itemsNumber: number;
  @Input() allPagesNumber: number;
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();
  @Output() pageSizeEvent: EventEmitter<number> = new EventEmitter<number>();
  private _currentPage: number = 1;
  private _currentSize: number = 5;
 
  constructor() {}

  ngOnInit(): void {}

  get currentPage(): number {
    return this._currentPage;
  }

  get pageSize(): number {
    return this._currentSize;
  }

  set currentPage(page) {
    this._currentPage = page;
    this.changePage.emit(this.currentPage);
  }

  set pageSize(size) {
    this._currentSize = size;
    this.pageSizeEvent.emit(this.pageSize);
    
  }

  onSetPage(event): void {
    this.currentPage = event.target.value;
  }

  onSetSize(event): void {
    this.pageSize = event.target.value;
  }


  onFirstPage(): void {
    this.currentPage = 1;
  }

  onLastPage(): void {
    this.currentPage = this.allPagesNumber;
  }

  onNextPage(): void {
    this.currentPage += 1;
  }

  onPreviousPage(): void {
    this.currentPage -= 1;
  }
  
  }  


  

