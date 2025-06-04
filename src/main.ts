import { bootstrapApplication } from '@angular/platform-browser';

import { provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { jWTInterceptor } from './app/common/jwt-interceptor';
import { routes } from './app/routes';
import { App } from './app/app';
import { provideRouter, withComponentInputBinding } from '@angular/router';

bootstrapApplication(App, {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideHttpClient(withFetch(), withInterceptors([jWTInterceptor])),
        provideRouter(routes, withComponentInputBinding()),
        provideZonelessChangeDetection()
    ]
})
  .catch(err => console.error(err));
