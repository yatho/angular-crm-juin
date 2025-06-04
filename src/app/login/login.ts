import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Authentication } from './authentication';
import { Router } from '@angular/router';

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
  private readonly authentService = inject(Authentication);
  private readonly router = inject(Router);

  constructor() {
    this.authentService.disconnect();
  }

  protected loginForm = new FormGroup({
    login: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
      nonNullable: true
    }),
    password: new FormControl('', {
      validators: [Validators.required, checkPassword],
      nonNullable: true
    })
  });

  submit() {
    if (this.loginForm.invalid) return;

    const {login, password} = this.loginForm.getRawValue();
    const user = this.authentService.authentUser(login, password);
    if (!user) {
      console.error('Authentication failed');
      return;
    }
    console.log(user);
    this.router.navigateByUrl('/home');
  }
}
