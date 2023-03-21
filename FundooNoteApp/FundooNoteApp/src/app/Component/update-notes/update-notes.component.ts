import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
  title: any;
  description: any;
  id: any;
  backgroundColour: any;
  constructor(
    private dialogbox: MatDialogRef<UpdateNotesComponent>,
    private notes: NotesService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title,
      this.description = data.description,
      this.id = data.noteId,
      this.backgroundColour = data.backgroundColour
  }

  ngOnInit(): void {
  }

  closeDialog() {
    let result = {
      title: this.title,
      description: this.description,
      backgroundColour: this.backgroundColour
    }
    this.notes.updateNotes(result, this.id).subscribe((response: any) => {
      console.log(response);
    });
    this.dialogbox.close();
  }

}
