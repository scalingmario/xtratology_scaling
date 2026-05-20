import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
  <header class="w-full font-sans tracking-wide">
    <div class="bg-primary px-6 py-4 flex items-center justify-between shadow-md sticky top-0 z-50">
      <div class="text-white font-medium text-sm tracking-widest cursor-pointer" routerLink="/">
        SCALING
      </div>
      
      <nav class="hidden md:flex gap-6 text-xs text-blue-100 items-center">
        <a href="#" class="hover:text-white transition-colors">Nosotros</a>
        <a href="#" class="hover:text-white transition-colors">Scaling Up</a>
        <a href="#metodologia" class="text-accent font-medium flex items-center gap-1">
          <span>▸</span> Xtratology
        </a>
        <a href="#" class="hover:text-white transition-colors">Casos de Éxito</a>
        <a href="#" class="hover:text-white transition-colors">Recursos</a>
        <a href="#contacto" class="hover:text-white transition-colors">Contáctanos</a>
      </nav>
      
      <a href="#contacto" class="bg-accent text-primary text-xs px-4 py-2 rounded font-medium hover:bg-opacity-90 transition-all cursor-pointer">
        Agenda una llamada
      </a>
    </div>
  </header>
  `
})
export class HeaderComponent {}
