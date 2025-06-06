import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators, ReactiveFormsModule } from '@angular/forms';
import { Authentication } from './authentication';
import { Router } from '@angular/router';
import { MatFormField, MatLabel, MatInput } from '@angular/material/input';
import { Help } from '../component/help/help';
import { MatButton } from '@angular/material/button';

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
    templateUrl: './login.html',
    styleUrl: './login.scss',
    imports: [ReactiveFormsModule, MatFormField, MatLabel, MatInput, Help, MatButton]
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
    this.authentService.authentUser(login, password).subscribe({
      next: (user) => {
        console.log(user);
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        console.error('Authentication failed');
      }
    });
  }
}
