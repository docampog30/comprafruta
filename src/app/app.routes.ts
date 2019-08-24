import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';


const APP_ROUTES: Routes = [
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: '',
    redirectTo: 'registro',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'registro', pathMatch: 'full' }
];

export const app_routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });