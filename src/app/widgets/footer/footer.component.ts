import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
  <section class="cierre-iconico bg-gray-50 py-16 text-center">
    <div class="container mx-auto px-4 flex flex-col items-center">
      <a href="/" class="cierre-logo-link mb-6 focus:outline-none focus:ring-2 focus:ring-primary">
        <img src="assets/LogoXtratology.png" alt="Logotipo Oficial de Xtratology Formato Ampliado" class="cierre-logo-img h-24 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" width="540" height="144" loading="lazy">
      </a>
      <p class="cierre-frase text-xl font-medium text-secondary italic">Diseñado para empresas que no quieren ser promedio.</p>
    </div>
  </section>
  <footer class="bg-primary text-white py-6 text-center text-sm">
    <div class="container mx-auto px-4">
      <p>&copy; 2026 Scaling LLC. Todos los derechos reservados. | <a href="https://scaling.llc" target="_blank" rel="noopener noreferrer" class="hover:underline focus:outline-none focus:ring-2 focus:ring-white">scaling.llc</a></p>
    </div>
  </footer>
  `
})
export class FooterComponent {}
