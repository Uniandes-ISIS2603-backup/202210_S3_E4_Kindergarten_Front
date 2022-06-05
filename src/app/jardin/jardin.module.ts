import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JardinComponent } from './jardin.component';
import { JardinListComponent } from './jardin-list/jardin-list.component';
import { JardinDetailComponent } from './jardin-detail/jardin-detail.component';
import { RouterModule } from '@angular/router';
import { JardinFormComponent } from './jardin-form/jardin-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    JardinComponent, JardinListComponent, JardinDetailComponent, JardinFormComponent],
  declarations: [JardinComponent, JardinListComponent, JardinDetailComponent, JardinFormComponent]
})
export class JardinModule { }
