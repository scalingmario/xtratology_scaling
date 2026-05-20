import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="problema py-16 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-primary mb-4">¿Tu empresa crece pero el caos también?</h2>
        <p class="text-xl italic text-secondary mb-12">"La estrategia sin ejecución es ilusión."</p>
        <!-- Grid Structure placeholder -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div class="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm text-left">
            <h4 class="font-bold text-lg text-primary mb-2">✗ Estrategia sin ejecución</h4>
            <p class="text-secondary">Planes que nunca se implementan. Ideas que se quedan en presentaciones.</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm text-left">
            <h4 class="font-bold text-lg text-primary mb-2">✗ Equipos desalineados</h4>
            <p class="text-secondary">Cada área avanza en dirección diferente. Falta de claridad en prioridades.</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm text-left">
            <h4 class="font-bold text-lg text-primary mb-2">✗ Dependencia del CEO</h4>
            <p class="text-secondary">Todo pasa por una sola persona. La empresa no escala sin ti presente.</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm text-left">
            <h4 class="font-bold text-lg text-primary mb-2">✗ Crecimiento sin rentabilidad</h4>
            <p class="text-secondary">Más ventas pero menos margen. El efectivo no alcanza para crecer.</p>
          </div>
        </div>
        <p class="text-xl font-medium text-primary">"No escalas por esfuerzo. Escalas por diseño."</p>
      </div>
    </section>
  `
})
export class ProblemComponent {}
