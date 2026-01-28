import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppShellComponent } from './app/app-shell.component';
import { routes } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppShellComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations()
  ]
}).catch(err => console.error(err));