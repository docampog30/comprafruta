import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { app_routing } from './app.routes';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,app_routing],
  declarations: [ AppComponent, HelloComponent, RegistroComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
