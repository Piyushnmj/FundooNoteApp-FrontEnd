import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {
  noteList: any;
  message: any;
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
        return object.isArchived===true && object.isTrashed===false
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
