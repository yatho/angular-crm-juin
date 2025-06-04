import { Routes } from '@angular/router';
import { authenticationGuard } from './login/authentication-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then(m => m.Login),
    title: 'Login',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home').then(m => m.Home),
    canActivate: [authenticationGuard]
  },
  {
    path: 'consumer',
    loadComponent: () => import('./consumers/list/list').then(m => m.List),
    canActivate: [authenticationGuard]
  },
  {
    path: 'consumer-fiche', 
    loadComponent: () => import('./consumers/fiche/fiche').then(m => m.Fiche),
    canActivate: [authenticationGuard]
  },
  {
    path: 'consumer-fiche/:id',
    loadComponent: () => import('./consumers/fiche/fiche').then(m => m.Fiche),
    canActivate: [authenticationGuard]
  }, 
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];