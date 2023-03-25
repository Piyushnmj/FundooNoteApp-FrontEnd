import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/dataService/data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  jsonArray: any;
  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  search(event:any){
    console.log(this.detailsArray);
    this.data.outgoingData(this.detailsArray);
  }

  detailsArray: Array<any> = [
    {
      "id": "1",
      "name": "Piyush",
      "department": "mechanical"
    },
    {
      "id": "2",
      "name": "Saurabh",
      "department": "electrical"
    },
    {
      "id": "3",
      "name": "Karan",
      "department": "civil"
    },
  ]
}
