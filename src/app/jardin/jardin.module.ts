import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JardinComponent } from './jardin.component';
import { JardinListComponent } from './jardin-list/jardin-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    JardinComponent, JardinListComponent],
  declarations: [JardinComponent, JardinListComponent]
})
export class JardinModule { }
