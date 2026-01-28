import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EcuacionesComponent } from './ecuaciones/ecuaciones.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'sistema-ecuaciones', component: EcuacionesComponent }
];