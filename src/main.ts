import { bootstrapApplication } from '@angular/platform-browser';
import { PreferencesComponent } from './app/preferences/preferences.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(PreferencesComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
