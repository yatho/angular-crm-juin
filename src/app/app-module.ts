import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './login/login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material-module';
import { Dummy } from './component/dummy/dummy';
import { Help } from './component/help/help';
import { Home } from './home/home';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { jWTInterceptor } from './common/jwt-interceptor';
import { PhonePipe } from './common/phone-pipe';
import { List } from './consumers/list/list';
import { Fiche } from './consumers/fiche/fiche';
import { Unsubscribe } from './common/unsubscribe';

@NgModule({
  declarations: [
    App,
    Login,
    Dummy,
    Help,
    Home,
    PhonePipe,
    List,
    Fiche,
    Unsubscribe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch(), withInterceptors([jWTInterceptor]))
  ],
  bootstrap: [App]
})
export class AppModule { }
