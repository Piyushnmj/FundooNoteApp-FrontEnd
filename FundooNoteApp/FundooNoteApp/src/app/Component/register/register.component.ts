import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;
  password: boolean = false;
  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      ConfirmPassword: new FormControl('', Validators.required)
    }, {validators: this.Mustmatch('password', 'ConfirmPassword') })
   }

  ngOnInit(): void {
  }

  registerUser(){
      console.log(this.registerForm);
      let result={
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password
      }
      this.userService.Register(result).subscribe((response:any)=>{
        console.log(response.message);
      });
  }

  get f() {
    return this.registerForm.controls;
  }

  Mustmatch(password: any, ConfirmPassword: any) {
    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const confirmPasswordcontrol = formGroup.controls[ConfirmPassword];
      if (confirmPasswordcontrol.errors && !confirmPasswordcontrol.errors['Mustmatch']) {
        return;
      }
      if (passwordcontrol.value !== confirmPasswordcontrol.value) {
        confirmPasswordcontrol.setErrors({ Mustmatch: true });
      }
      // else {
      //   confirmPasswordcontrol.setValue(null);
      // }
    };
  }

  toggleShow(){
    this.password = !this.password;
  }
}
