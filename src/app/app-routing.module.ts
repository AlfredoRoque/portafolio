import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppcomponentEnComponent } from './en/appcomponent-en/appcomponent-en.component';


const routes: Routes = [
  {path: 'en', component: AppcomponentEnComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
