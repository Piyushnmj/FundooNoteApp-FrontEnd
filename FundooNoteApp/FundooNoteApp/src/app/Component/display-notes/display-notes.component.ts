import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/Services/dataService/data.service';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Output() displayNotesEvent = new EventEmitter<string>();
  @Input() isTrashed: any;
  message: any;
  filterNote: any;
  layoutdata: any;
  
  constructor(public dialog: MatDialog, private data: DataService) { }

  @Input() notesList: any;

  ngOnInit(): void {
    this.data.incomingData.subscribe((response) => {
      console.log("Searching...", response);
      this.filterNote = response;
    });

    this.data.changeLayout.subscribe((response) => {
      console.log("layout change works", response);
      this.layoutdata = response;

      if(this.layoutdata==""){
        this.layoutdata="display-note-container";
      }
    });
  }

  editNote(notes: any) {
    let dialogbox = this.dialog.open(UpdateNotesComponent, {
      height: 'auto',
      width: '30%',
      data: notes
    })
    dialogbox.afterClosed().subscribe(result => {
      console.log("After Update", result);
      this.displayNotesEvent.emit(result)
    })
  }

  displayMessage($event: any) {
    console.log("Icons to display" + $event);
    this.message = $event;
    this.displayNotesEvent.emit($event);
  }

}
