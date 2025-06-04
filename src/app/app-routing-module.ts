import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { authenticationGuard } from './login/authentication-guard';
import { List } from './consumers/list/list';
import { Fiche } from './consumers/fiche/fiche';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login,
    title: 'Login',
  },
  {
    path: 'home',
    component: Home,
    canActivate: [authenticationGuard]
  },
  {
    path: 'consumer',
    component: List,
    canActivate: [authenticationGuard]
  },
  {
    path: 'consumer-fiche', 
    component: Fiche,
    canActivate: [authenticationGuard]
  },
  {
    path: 'consumer-fiche/:id',
    component: Fiche,
    canActivate: [authenticationGuard]
  }, 
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
