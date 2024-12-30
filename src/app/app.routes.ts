import { Routes } from '@angular/router';
import { PreferencesComponent } from './preferences/preferences.component';

export const routes: Routes = [
  { path: 'preferences', component: PreferencesComponent },
  { path: '', redirectTo: '/preferences', pathMatch: 'full' }
];
