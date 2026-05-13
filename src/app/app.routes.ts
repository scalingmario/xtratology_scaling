import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Xtratology - Diseño de Escalamiento Empresarial'
  },
  { path: '**', redirectTo: '' }
];
