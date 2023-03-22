import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
  noteList: any;
  message: any;
  isTrashed = true;
  @Output() displayNotesEvent = new EventEmitter<string>();
  constructor(private note: NotesService) { }

  ngOnInit(): void {
    this.createNote();
  }

  createNote(){
    this.note.getNotes().subscribe((response:any)=>{
      console.log(response.data);
      this.noteList=response.data;
      this.noteList.reverse();
      this.noteList=this.noteList.filter((object:any)=>{
        return object.isTrashed===true
      })
    })
  }

  receiverRefreshEvent($event:any){
    // console.log("Icons to display"+$event);
    // this.message=$event;
    // this.displayNotesEvent.emit(this.message);
    this.createNote();
  }

}
