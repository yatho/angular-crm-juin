import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './login/login';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material-module';
import { Dummy } from './component/dummy/dummy';
import { Help } from './component/help/help';

@NgModule({
  declarations: [
    App,
    Login,
    Dummy,
    Help
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
