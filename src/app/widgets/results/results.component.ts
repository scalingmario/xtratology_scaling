import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="resultados" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-extrabold text-primary mb-12 text-center">Resultados documentados de empresas reales</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
          <!-- 6x -->
          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div class="text-3xl md:text-5xl font-bold text-accent mb-2">6x</div>
            <p class="text-sm md:text-base text-secondary font-medium">Crecimiento en EBITDA en 3 años</p>
          </div>
          
          <!-- 90% -->
          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div class="text-3xl md:text-5xl font-bold text-accent mb-2">90%</div>
            <p class="text-sm md:text-base text-secondary font-medium">Reducción en dependencia del CEO</p>
          </div>

          <!-- 2x -->
          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div class="text-3xl md:text-5xl font-bold text-accent mb-2">2x</div>
            <p class="text-sm md:text-base text-secondary font-medium">Incremento en velocidad de ejecución</p>
          </div>

          <!-- +50 -->
          <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div class="text-3xl md:text-5xl font-bold text-accent mb-2">+50</div>
            <p class="text-sm md:text-base text-secondary font-medium">Empresas escaladas con éxito</p>
          </div>
        </div>

        <div class="max-w-3xl mx-auto text-center bg-white p-10 rounded-3xl shadow-lg border border-gray-50 italic">
          <p class="text-xl md:text-2xl text-primary mb-6">"Implementar Xtratology fue el punto de inflexión. Pasamos de ser autoempleados de nuestro propio negocio a tener una verdadera empresa que funciona sin nosotros."</p>
          <div class="font-bold text-primary not-italic">— Fundador, Empresa de Logística</div>
        </div>
      </div>
    </section>
  `
})
export class ResultsComponent {}
