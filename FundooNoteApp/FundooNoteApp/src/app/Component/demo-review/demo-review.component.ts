import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-demo-review',
  templateUrl: './demo-review.component.html',
  styleUrls: ['./demo-review.component.scss']
})
export class DemoReviewComponent implements OnInit {
  reviewForm!:FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder, private note:NotesService) {
    this.reviewForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
  }

  submitForm(){
    this.submitted = true;
    if (this.reviewForm.valid) {
      let result = {
        title: this.reviewForm.value.title,
        description: this.reviewForm.value.description
      }
      console.log(result);
      this.note.addNotes(result).subscribe((response: any) => {
        console.log(response);
      });
    }
  }

}
