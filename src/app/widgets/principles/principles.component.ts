import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principles',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-extrabold text-primary mb-12 text-center">Los 5 Principios del escalamiento empresarial</h2>
        
        <div class="flex flex-col gap-6 max-w-5xl mx-auto">
          <!-- Principio 1 -->
          <div class="flex flex-col md:flex-row bg-gray-50 border-l-4 border-accent shadow-sm p-6 gap-4">
            <div class="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
            <div>
              <h3 class="text-xl font-bold text-primary mb-2">Estrategia</h3>
              <p class="text-secondary">Diferenciación real y enfoque en el mercado para ganar la preferencia del cliente.</p>
            </div>
          </div>

          <!-- Principio 2 -->
          <div class="flex flex-col md:flex-row bg-gray-50 border-l-4 border-accent shadow-sm p-6 gap-4">
            <div class="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
            <div>
              <h3 class="text-xl font-bold text-primary mb-2">Ejecución</h3>
              <p class="text-secondary">Ritmo de reuniones y rendición de cuentas para asegurar que los planes se cumplan.</p>
            </div>
          </div>

          <!-- Principio 3 -->
          <div class="flex flex-col md:flex-row bg-gray-50 border-l-4 border-accent shadow-sm p-6 gap-4">
            <div class="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
            <div>
              <h3 class="text-xl font-bold text-primary mb-2">Equipo</h3>
              <p class="text-secondary">Atraer y retener al talento adecuado alineado con la cultura de la organización.</p>
            </div>
          </div>

          <!-- Principio 4 -->
          <div class="flex flex-col md:flex-row bg-gray-50 border-l-4 border-accent shadow-sm p-6 gap-4">
            <div class="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
            <div>
              <h3 class="text-xl font-bold text-primary mb-2">Efectivo</h3>
              <p class="text-secondary">Gestión financiera para garantizar el flujo necesario que financie el crecimiento.</p>
            </div>
          </div>

          <!-- Principio 5 -->
          <div class="flex flex-col md:flex-row bg-gray-50 border-l-4 border-accent shadow-sm p-6 gap-4">
            <div class="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
            <div>
              <h3 class="text-xl font-bold text-primary mb-2">Liderazgo</h3>
              <p class="text-secondary">Desarrollo de las capacidades directivas para guiar la transformación de la empresa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PrinciplesComponent {}
