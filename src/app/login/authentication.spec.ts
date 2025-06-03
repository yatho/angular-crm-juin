import { TestBed } from '@angular/core/testing';

import { Authentication } from './authentication';

describe('Authentication', () => {
  let service: Authentication;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Authentication);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should authenticate user with valid credentials', () => {
    const login = 'admin';
    const password = 'password';
    const user = service.authentUser(login, password);
    
    expect(user).toBeDefined();
    expect(user.login).toBe(login);
    expect(user.lastname).toBe('Doe');
    expect(user.firstname).toBe('John');
  });
});
