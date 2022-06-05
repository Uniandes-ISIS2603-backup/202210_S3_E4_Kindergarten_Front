import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JardinFormComponent } from './jardin/jardin-form/jardin-form.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'create', component: JardinFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
