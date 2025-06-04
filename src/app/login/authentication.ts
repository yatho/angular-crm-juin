import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from './model/user';

const USER_STORAGE_KEY = "angular-crm.user";
const TOKEN_STORAGE_KEY: string = 'angular-crm.token';

type AuthentResponse = {
  user: User;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class Authentication {
  private currentUser?: User;
  private jwtToken?: string;

  private readonly httpClient = inject(HttpClient);

  constructor() {
    if (sessionStorage.getItem(USER_STORAGE_KEY)) {
      this.currentUser = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY)!);
      this.jwtToken = sessionStorage.getItem(TOKEN_STORAGE_KEY)!;
    }
  }

  public get authenticated(): boolean {
    return !!this.currentUser;
  }

  public get token(): string | undefined {
    return this.jwtToken;
  }

  authentUser(login: string, password: string): Observable<User> {
    return this.httpClient.post<AuthentResponse>('/api/auth/login', { email: login, password })
      .pipe(
        map(response => {
          console. log('result', response);
          this.currentUser = response.user;
          this.jwtToken = response.token;
          sessionStorage.setItem(USER_STORAGE_KEY, JSON.stringify(this.currentUser));
          sessionStorage.setItem(TOKEN_STORAGE_KEY, this.jwtToken);
          return this.currentUser;
        })
      );
  }

  disconnect(): void {
     delete this.currentUser;
     delete this.jwtToken;
     sessionStorage.removeItem(USER_STORAGE_KEY);
     sessionStorage.removeItem(TOKEN_STORAGE_KEY);
   }
}
