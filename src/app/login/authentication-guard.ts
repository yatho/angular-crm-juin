import { CanActivateFn, Router } from '@angular/router';
import { Authentication } from './authentication';
import { inject } from '@angular/core';

export const authenticationGuard: CanActivateFn = (route, state) => {
  if (inject(Authentication).authenticated) {
    return true;
  }
  return inject(Router).parseUrl('/login');
};
