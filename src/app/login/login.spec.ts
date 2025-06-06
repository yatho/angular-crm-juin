import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login } from './login';
import { ReactiveFormsModule } from '@angular/forms';
import { Help } from '../component/help/help';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';

const getSubmitButton = (fixture: ComponentFixture<Login>) => {
  return fixture.nativeElement.querySelector('button[type="submit"]');
};
const getLoginField = (fixture: ComponentFixture<Login>) => {
  return fixture.nativeElement.querySelector('input[name="login"]');
};
const getPasswordField = (fixture: ComponentFixture<Login>) => {
  return fixture.nativeElement.querySelector('input[name="password"]');
};

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        ReactiveFormsModule,
        Login, Help
    ],
    providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
    ]
})
    .compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filled the login and the password', () => {
    const loginField = getLoginField(fixture);
    const passwordField = getPasswordField(fixture);
    const button = getSubmitButton(fixture);

    expect(button.disabled).toBeTruthy();
    expect(component['loginForm'].value).toEqual({
      login: '',
      password: ''
    });

    loginField.value = 'admin';
    passwordField.value = 'password';
    loginField.dispatchEvent(new Event('input'));
    passwordField.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component['loginForm'].value).toEqual({
      login: 'admin',
      password: 'password'
    });
    expect(component['loginForm'].valid).toBeTruthy();
    expect(component['loginForm'].errors).toBeNull();

    expect(button.disabled).toBeFalsy();
  });
});
