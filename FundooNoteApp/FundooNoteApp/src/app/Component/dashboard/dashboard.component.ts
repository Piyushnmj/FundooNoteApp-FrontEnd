import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/dataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  view:any="display-note-container";

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  search(event: any) {
    console.log(event.target.value)
    this.data.outgoingData(event.target.value);
  }

  changeLayoutView(){
    if(this.view == "display-note-container"){
      this.view = "layoutchange"
      console.log("column view", this.view)
    }else{
      this.view = "display-note-container"
      console.log("row view", this.view)
    }
    this.data.outgoingMessage(this.view);
  }
}
