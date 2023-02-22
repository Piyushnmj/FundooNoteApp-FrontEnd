import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.scss']
})
export class TakeNotesComponent implements OnInit {
  takenoteForm!: FormGroup
  isShow: boolean = true;
  submitted = false;
  token: any;
  constructor(private formBuilder: FormBuilder, private activeRoute: ActivatedRoute, private note: NotesService) { }

  ngOnInit(): void {
    this.takenoteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }

  show() {
    this.isShow = false;
  }

  createNote() {
    this.submitted = true;
    if (this.takenoteForm.valid) {
      let result = {
        title: this.takenoteForm.value.title,
        description: this.takenoteForm.value.description
      }
      console.log(result);
      this.note.addNotes(result).subscribe((response: any) => {
        console.log(response);
      });
    }
    this.isShow = true;
  }
}
