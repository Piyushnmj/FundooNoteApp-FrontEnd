import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  resetForm!: FormGroup;
  submitted = false;
  token: any;
  constructor(private formBuilder: FormBuilder, private activeRoute: ActivatedRoute, private userService:UserService) {
    this.resetForm = this.formBuilder.group({
      new_Password: new FormControl('', Validators.required),
      confirm_Password: new FormControl('', Validators.required)
    }, { validators: this.Mustmatch('new_Password', 'confirm_Password') })
  }

  get f() {
    return this.resetForm.controls;
  }

  ngOnInit(): void {
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }

  // resetForm = new FormGroup({
  //   password: new FormControl("", Validators.required),
  //   confirmPassword: new FormControl("", Validators.required)
  // });

  resetSubmit() {
    this.submitted = true;
    if(this.resetForm.valid){
      console.log("Reset",this.resetForm.value);
      let result={
        new_Password:this.resetForm.value.new_Password,
        confirm_Password:this.resetForm.value.confirm_Password
      }
      console.log(result);
      this.userService.ResetPassword(result, this.token).subscribe((response:any)=>{
        console.log(response);
      });
    }
  }

  Mustmatch(new_Password: any, confirm_Password: any) {
    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[new_Password];
      const confirmPasswordcontrol = formGroup.controls[confirm_Password];
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

}

