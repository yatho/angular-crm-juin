import { TestBed } from '@angular/core/testing';

import { Authentication } from './authentication';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Authentication', () => {
  let service: Authentication;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    });
    service = TestBed.inject(Authentication);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should authenticate user with valid credentials', () => {
    const login = 'admin';
    const password = 'password';
    const user = service.authentUser(login, password);
    user.subscribe(user => {
      expect(user).toBeDefined();
      expect(user.login).toBe(login);
    });
  });
});
