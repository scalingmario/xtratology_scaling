import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
  <header class="header-div w-full bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <a routerLink="/" class="logo focus:outline-none focus:ring-2 focus:ring-primary">
        <img src="assets/LogoXtratology.png" alt="Logotipo Oficial de Xtratology" class="logo-img h-12 w-auto" width="200" height="50">
      </a>
      <nav class="hidden md:flex gap-6 items-center">
        <a class="header-option text-secondary hover:text-primary transition-colors font-medium" href="#metodologia">Metodología</a>
        <a class="header-option text-secondary hover:text-primary transition-colors font-medium" href="#">Become a Coach</a>
        <a href="#contacto" class="nav-cta bg-primary text-white px-5 py-2 rounded-lg hover:bg-opacity-90 transition-all shadow-md font-semibold">Solicitar sesión estratégica</a>
      </nav>
    </div>
  </header>
  `
})
export class HeaderComponent {}
