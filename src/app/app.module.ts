import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { app_routing } from './app.routes';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,app_routing,LoadingBarHttpClientModule],
  declarations: [ AppComponent, HelloComponent, RegistroComponent, AppNavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
