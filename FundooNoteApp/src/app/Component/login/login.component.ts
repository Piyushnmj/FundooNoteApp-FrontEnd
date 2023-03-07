import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // loginForm!:FormGroup
  constructor(private userService: UserService, private route:Router, private popup:MatSnackBar) { }

  ngOnInit(): void {
  
  }
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", Validators.required)
  });

  loginSubmit(){
    console.log(this.loginForm);
    let result={
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    }
    this.userService.Login(result).subscribe((response:any)=>{
      console.log(response.message);
      localStorage.setItem('token', response.data);
      this.route.navigateByUrl("/home/create");
      this.popup.open('Login Successfull !!', ' ', {
        duration: 2000,
        verticalPosition: 'bottom'
      })

    }, error => {
      this.popup.open('Login Unsuccessful !!', ' ', {
        duration: 2000,
        verticalPosition: 'bottom'
      })
    });
  }

  get f() {
    return this.loginForm.controls;
  }

}
