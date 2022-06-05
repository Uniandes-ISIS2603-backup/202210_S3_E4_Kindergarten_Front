import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JardinModule } from './jardin/jardin.module';
import { HttpClientModule } from '@angular/common/http';
import { JardinRoutingModule } from './jardin/jardin-routing.module';
import { HomeComponent } from './home/home.component';
import { ServicioModule } from './servicio/servicio.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JardinModule,
    ServicioModule,
    HttpClientModule,
    JardinRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
