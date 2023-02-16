import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  resetForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.resetForm = this.formBuilder.group({
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    }, { validators: this.Mustmatch('password', 'confirmPassword') })
    // this.resetForm.addValidators(
    //   createCompareValidator(
    //     this.resetForm.get('password'),
    //     this.resetForm.get('confirmPassword')
    //   )
    // );
  }

  get f() {
    return this.resetForm.controls;
  }

  ngOnInit(): void {
  }

  // resetForm = new FormGroup({
  //   password: new FormControl("", Validators.required),
  //   confirmPassword: new FormControl("", Validators.required)
  // });

  resetSubmit() { }

  Mustmatch(password: any, confirmPassword: any) {
    return (formGroup: FormGroup) => {
      const passwordcontrol = formGroup.controls[password];
      const confirmPasswordcontrol = formGroup.controls[confirmPassword];
      if (confirmPasswordcontrol.errors && !confirmPasswordcontrol.errors['Mustmatch']) {
        return;
      }
      if (passwordcontrol.value !== confirmPasswordcontrol.value) {
        confirmPasswordcontrol.setErrors({ Mustmatch: true });
      } else {
        confirmPasswordcontrol.setValue(null);
      }
    };
  }

}

// export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
//   const password = control.get('password');
//   const confirmPassword = control.get('confirmPassword');

//   return password && confirmPassword && password.value === confirmPassword.value ? { confirmPassword: true } : null;
// };

// function createCompareValidator(controlOne: AbstractControl, controlTwo: AbstractControl) {
//   return () => {
//   if (controlOne.value !== controlTwo.value)
//     return { match_error: 'Value does not match' };
//   return null;
// };
// }

