import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-methodology',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="metodologia" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-primary mb-4">No organizamos empresas. Las escalamos.</h2>
          <p class="text-lg text-secondary max-w-2xl mx-auto">Nuestra metodología se basa en la implementación de sistemas probados que permiten un crecimiento sostenible y predecible.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 5 Principios -->
          <div class="bg-white p-8 shadow-sm rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
            <div class="text-accent text-4xl font-bold mb-4">5</div>
            <h3 class="text-xl font-bold text-primary mb-2">Principios</h3>
            <p class="text-secondary">Los pilares fundamentales que toda empresa debe dominar para escalar con éxito.</p>
          </div>

          <!-- 27 Hábitos -->
          <div class="bg-white p-8 shadow-sm rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
            <div class="text-accent text-4xl font-bold mb-4">27</div>
            <h3 class="text-xl font-bold text-primary mb-2">Hábitos</h3>
            <p class="text-secondary">Rutinas de ejecución que garantizan que la estrategia se convierta en resultados diarios.</p>
          </div>

          <!-- +100 Herramientas -->
          <div class="bg-white p-8 shadow-sm rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
            <div class="text-accent text-4xl font-bold mb-4">+100</div>
            <h3 class="text-xl font-bold text-primary mb-2">Herramientas</h3>
            <p class="text-secondary">Recursos prácticos y plantillas listas para usar en cada área de tu negocio.</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class MethodologyComponent {}
