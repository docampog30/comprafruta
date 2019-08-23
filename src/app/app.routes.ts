import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';


const APP_ROUTES: Routes = [
  {
    path: 'home',
    component: RegistroComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const app_routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });