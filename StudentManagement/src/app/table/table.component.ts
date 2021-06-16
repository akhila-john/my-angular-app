import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';

// import { MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() GridData: any[];
  @Input() ColData: any[];
  
  @Output() RowSelection: EventEmitter<any> = new EventEmitter();
  @Output() RowDeletion: EventEmitter<any> = new EventEmitter();

  
  // @Input() columns: string[];
  // @Input() rows: any[];

  // dataSource: any;
  
  //  public dataSource = new MatTableDataSource<any>();

  constructor() { }

  ngOnInit(): void {
    // this.dataSource.data = this.rows;
  }

  onRowClick(record: any) {
    this.RowSelection.emit(record);
  }

  onDelete(record: any) {
    console.log("from table");
    this.RowDeletion.emit(record);
  }

  

}
