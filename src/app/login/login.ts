import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

function checkPassword(c: AbstractControl): ValidationErrors | null {
  if (c.value.length < 5) {
    return {
      checkPassword: 'Error control password'
    };
  }
  return null;
}

@Component({
  selector: 'crm-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  protected loginForm = new FormGroup({
    login: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    password: new FormControl('', [checkPassword])
  });

  submit() {
    console.log('Login:', this.loginForm.value, this.loginForm.controls.login.errors);
  }
}
