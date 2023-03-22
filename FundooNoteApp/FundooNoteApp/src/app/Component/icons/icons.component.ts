import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  isTrashed: any;
  isArchived: any;
  @Input() noteData: any;
  @Input() isTrash: any;
  @Output() updateEvent = new EventEmitter<string>();
  constructor(private note: NotesService, private popup: MatSnackBar) { }

  ngOnInit(): void {
    this.isTrashed = this.isTrash;
    //this.isArchived = this.noteData.isArchived;
  }

  trash() {
    this.isTrashed = false;
    let result = {
      noteId: this.noteData.noteId
    }
    this.note.trashNotes(result).subscribe((response: any) => {
      console.log(response);
      this.updateEvent.emit(response);
      this.popup.open('Note trashed successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    }, error => this.popup.open('Something went wrong', '', {
      duration: 3000,
      verticalPosition: 'bottom'
    })
    )
  }

  restore() {
    this.isTrashed = true;
    let result = {
      noteId: this.noteData.noteId
    }
    this.note.trashNotes(result).subscribe((response: any) => {
      console.log(response);
      this.updateEvent.emit(response);
      this.popup.open('Note restored successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    }, error => this.popup.open('Something went wrong', '', {
      duration: 3000,
      verticalPosition: 'bottom'
    })
    )
  }

  delete() {
    let result = {
      noteId: this.noteData.noteId
    }
    this.note.deleteNotes(result).subscribe((response: any) => {
      console.log("Note deleted", response);
      this.updateEvent.emit(response);
      this.popup.open('Note Deleted', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    }, error => this.popup.open('Something went wrong', '', {
      duration: 3000,
      verticalPosition: 'bottom'
    })
    )
  }

  archive() {
    this.isArchived = false;
    let result = {
      noteId: this.noteData.noteId
    }
    this.note.archiveNotes(result).subscribe((response: any) => {
      console.log(response);
      this.updateEvent.emit(response);
      this.popup.open('Note archived successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    }, error => this.popup.open('Something went wrong', '', {
      duration: 3000,
      verticalPosition: 'bottom'
    })
    )
  }

  unarchive() {
    this.isArchived = true;
    let result = {
      noteId: this.noteData.noteId
    }
    this.note.archiveNotes(result).subscribe((response: any) => {
      console.log(response);
      this.updateEvent.emit(response);
      this.popup.open('Note unarchived successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    }, error => this.popup.open('Something went wrong', '', {
      duration: 3000,
      verticalPosition: 'bottom'
    })
    )
  }

  colorArray: Array<any> = [
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'tomato' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#7FFFD4', name: 'aquamarine' },
    { code: '#D3D3D3', name: 'grey' },
    { code: '#BC8F8F', name: 'rosybrown' },
    { code: '#FFE4C4', name: 'bisque' }
  ]

  changeColor(color: any) {
    let result = {
      backgroundColour: color.name,
      noteId: this.noteData.noteId
    }
    this.note.changeNotesColor(result).subscribe((response: any) => {
      console.log(response);
      this.updateEvent.emit(response);
    })
  }

}
