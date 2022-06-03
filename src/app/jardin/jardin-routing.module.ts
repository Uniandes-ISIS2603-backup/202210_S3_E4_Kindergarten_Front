import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JardinListComponent } from './jardin-list/jardin-list.component';
import { JardinDetailComponent } from './jardin-detail/jardin-detail.component';


const routes: Routes = [{
 path: 'jardines',
 children: [
   {
     path: 'list',
     component: JardinListComponent
   },
   {
     path: ':id',
     component: JardinDetailComponent
   },
 ]
}];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class JardinRoutingModule { }
