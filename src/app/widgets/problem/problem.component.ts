import { Component } from '@angular/core';

@Component({
  selector: 'app-problem',
  standalone: true,
  template: `
  <section class="bg-surface py-12 px-8 border-t border-borderline">
    <div class="text-center mb-8">
      <h2 class="text-[22px] font-medium text-primary mb-1.5">Lo que Xtratology resuelve</h2>
      <p class="text-xs text-textmuted">Los puntos donde el crecimiento se atasca.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
      
      <div class="bg-white py-4 px-5 rounded-md border-l-[3px] border-l-accent shadow-sm">
        <div class="text-[13px] font-medium text-primary mb-1 flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          Cuando todo pasa por ti
        </div>
        <div class="text-[11px] text-textmuted leading-relaxed">Construye un equipo que decida sin esperar tu visto bueno.</div>
      </div>

      <div class="bg-white py-4 px-5 rounded-md border-l-[3px] border-l-accent shadow-sm">
        <div class="text-[13px] font-medium text-primary mb-1 flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          Cuando crecer cuesta más de lo que da
        </div>
        <div class="text-[11px] text-textmuted leading-relaxed">Recupera margen sin frenar el ritmo.</div>
      </div>

      <div class="bg-white py-4 px-5 rounded-md border-l-[3px] border-l-accent shadow-sm">
        <div class="text-[13px] font-medium text-primary mb-1 flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          Cuando el plan no llega a la operación
        </div>
        <div class="text-[11px] text-textmuted leading-relaxed">Cierra la brecha entre estrategia y ejecución diaria.</div>
      </div>

      <div class="bg-white py-4 px-5 rounded-md border-l-[3px] border-l-accent shadow-sm">
        <div class="text-[13px] font-medium text-primary mb-1 flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          Cuando el equipo avanza sin la misma claridad
        </div>
        <div class="text-[11px] text-textmuted leading-relaxed">Una sola dirección, una sola prioridad, un solo lenguaje.</div>
      </div>

    </div>
  </section>
  `
})
export class ProblemComponent {}
