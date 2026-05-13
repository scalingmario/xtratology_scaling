import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
  <main class="w-full">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-b from-gray-50 to-white py-20 text-center">
      <div class="container mx-auto px-4 max-w-4xl">
        <p class="hero-badge text-accent font-bold tracking-wider text-sm mb-4 uppercase">La forma en que operan las empresas que logran resultados extraordinarios</p>
        <h1 class="text-4xl md:text-6xl font-extrabold text-primary mb-6 leading-tight">El crecimiento exponencial no es suerte. Es diseño.</h1>
        <p class="hero-subtitle text-lg md:text-xl text-secondary mb-10">Sistema completo para escalar tu empresa: 5 Principios, 27 Hábitos, +100 herramientas. Resultados documentados de hasta 6x.</p>
        <div class="hero-ctas flex flex-col sm:flex-row justify-center gap-4">
          <a href="#metodologia" class="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all shadow-md font-semibold text-lg">Descubrir Xtratology</a>
          <a href="#contacto" class="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 rounded-lg transition-all font-semibold text-lg">Solicitar sesión estratégica</a>
        </div>
      </div>
    </section>

    <!-- Content Sections (Legacy DOM wrapped) -->
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
  </main>
  `
})
export class HomeComponent {}
