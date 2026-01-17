import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppShellComponent } from './app/app-shell.component';
import { routes } from './app/app-routing.module';

bootstrapApplication(AppShellComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));