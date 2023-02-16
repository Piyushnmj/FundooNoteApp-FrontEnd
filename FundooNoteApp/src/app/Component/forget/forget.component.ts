import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  submitted=false;
  constructor( private userService:UserService ) { }

  ngOnInit(): void {
  }

  forgetForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
  });

  forgetPassword(){
    this.submitted=true;
    if (this.forgetForm.valid){
      let result={
        email: this.forgetForm.value.email,
      }
      this.userService.ForgetPassword(result).subscribe((response:any)=>{
        console.log("Reset link sent successfully", response);
      });
    }
  }

  get f() {
    return this.forgetForm.controls;
  }

}
