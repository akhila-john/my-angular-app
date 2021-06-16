import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit {
batch:any[]=[
  {batch_id:90,batchname:'science',fee:1200},
  {batch_id:91,batchname:'commerce',fee:1500},
  {batch_id:92,batchname:'arts',fee:1200},
  
]
  constructor() { }

  ngOnInit(): void {
  }

}
