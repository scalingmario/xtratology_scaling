import { Component } from '@angular/core';

@Component({
  selector: 'app-cta-final',
  standalone: true,
  template: `
  <section class="bg-primary py-9 px-8 text-center">
    <h2 class="text-[20px] font-medium text-white leading-[1.3] mb-2 max-w-2xl mx-auto">
      Cuando tu empresa crece sin que tú la sostengas,<br class="hidden md:block"/>el negocio empieza a ser tuyo de verdad.
    </h2>
    <p class="text-[12px] text-accent italic mb-5">
      Eso es Xtratology.
    </p>
    
    <a href="#contacto" class="inline-block bg-warning text-primary text-[13px] px-7 py-3 rounded font-medium hover:opacity-90 transition-opacity cursor-pointer">
      Conoce la metodología completa &rarr;
    </a>
  </section>
  `
})
export class CtaFinalComponent {}
