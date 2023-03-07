import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {
  notesArray: any;
  constructor( private notes:NotesService) { }

  ngOnInit(): void {
    this.createNote()
  }

  createNote(){
    this.notes.getNotes().subscribe((response:any)=>{
      console.log(response);
      this.notesArray=response.data;
      console.log("Stored to Array Variable");
      console.log(this.notesArray);
      this.notesArray.reverse();
      this.notesArray=this.notesArray.filter((object:any)=>{
        return object.isTrashed===false && object.isArchived===false;
      })
    })
  }

  receiverRefreshEvent($event:any){
    console.log("GetNotes"+$event);
    this.createNote();
  }

}
