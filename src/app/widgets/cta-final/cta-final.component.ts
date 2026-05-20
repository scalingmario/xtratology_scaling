import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-final',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contacto" class="py-24 bg-primary text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-5xl font-extrabold mb-6">¿Listo para escalar tu empresa?</h2>
        <p class="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Deja de apagar incendios y empieza a construir una organización que trabaje para ti. Solicita una sesión estratégica hoy mismo.</p>
        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <a href="#" class="bg-accent text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg">Solicitar Sesión Estratégica</a>
          <a href="mailto:hola@xtratology.com" class="border-2 border-white border-opacity-30 hover:bg-white hover:text-primary px-10 py-4 rounded-xl font-bold text-lg transition-all">Hablar con un experto</a>
        </div>
        <p class="mt-8 text-sm opacity-60">Cupos limitados por mes para garantizar la calidad del acompañamiento.</p>
      </div>
    </section>
  `
})
export class CtaFinalComponent {}
