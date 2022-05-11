import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Prueba_ninosModule } from './prueba_ninos/prueba_ninos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Prueba_ninosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
