import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JardinModule } from './jardin/jardin.module';
import { HttpClientModule } from '@angular/common/http';
import { JardinRoutingModule } from './jardin/jardin-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JardinModule,
    HttpClientModule,
    JardinRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
