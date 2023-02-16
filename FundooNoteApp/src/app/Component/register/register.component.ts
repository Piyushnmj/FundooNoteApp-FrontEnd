import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", Validators.required),
    ConfirmPassword: new FormControl("", Validators.required)
  }, {validators: confirmPasswordValidator});

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
        localStorage.setItem('token', response.data);
      });
  }
}

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('ConfirmPassword');

  return password && confirmPassword && password.value === confirmPassword.value ? { confirmPassword: true } : null;
};
