import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-differentiators',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-extrabold text-primary mb-12 text-center">Por qué Xtratology y no otra metodología</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Diferenciador 1 -->
          <div class="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
            <h3 class="text-xl font-bold text-primary mb-4 flex items-center">
              <span class="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
              Enfoque en Implementación
            </h3>
            <p class="text-secondary leading-relaxed">No solo te decimos qué hacer, te damos las herramientas y el acompañamiento para que realmente suceda en tu empresa.</p>
          </div>

          <!-- Diferenciador 2 -->
          <div class="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
            <h3 class="text-xl font-bold text-primary mb-4 flex items-center">
              <span class="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
              Sistema Holístico
            </h3>
            <p class="text-secondary leading-relaxed">Cubrimos Estrategia, Ejecución, Equipo y Efectivo. Un crecimiento balanceado que no rompe la operación.</p>
          </div>

          <!-- Diferenciador 3 -->
          <div class="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
            <h3 class="text-xl font-bold text-primary mb-4 flex items-center">
              <span class="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
              Resultados Medibles
            </h3>
            <p class="text-secondary leading-relaxed">Nuestros KPIs están alineados con tu rentabilidad y crecimiento real. Si no se mide, no se mejora.</p>
          </div>

          <!-- Diferenciador 4 -->
          <div class="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
            <h3 class="text-xl font-bold text-primary mb-4 flex items-center">
              <span class="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
              Cultura de Alto Rendimiento
            </h3>
            <p class="text-secondary leading-relaxed">Transformamos la mentalidad del equipo para que asuman la responsabilidad y busquen la excelencia.</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class DifferentiatorsComponent {}
