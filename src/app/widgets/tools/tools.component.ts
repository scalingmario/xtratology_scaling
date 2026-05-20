import { Component } from '@angular/core';

@Component({
  selector: 'app-tools',
  standalone: true,
  template: `
  <section class="bg-white py-10 px-8">
    <div class="text-center mb-6">
      <h2 class="text-[22px] font-medium text-primary mb-1.5">Herramientas Xtratology</h2>
      <p class="text-xs text-textmuted">Seis instrumentos diseñados para decisiones que mueven la aguja.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-w-4xl mx-auto">
      
      <div class="bg-surface p-3.5 rounded-md border border-borderline">
        <div class="text-[12px] font-medium text-primary mb-1">Blue Leap</div>
        <div class="text-[10px] text-textmuted">Salto estratégico con foco</div>
      </div>
      
      <div class="bg-surface p-3.5 rounded-md border border-borderline">
        <div class="text-[12px] font-medium text-primary mb-1">Distincta</div>
        <div class="text-[10px] text-textmuted">Posicionamiento que diferencia</div>
      </div>
      
      <div class="bg-surface p-3.5 rounded-md border border-borderline">
        <div class="text-[12px] font-medium text-primary mb-1">Core Compass</div>
        <div class="text-[10px] text-textmuted">Brújula de decisiones críticas</div>
      </div>
      
      <div class="bg-surface p-3.5 rounded-md border border-borderline">
        <div class="text-[12px] font-medium text-primary mb-1">Profit Vector</div>
        <div class="text-[10px] text-textmuted">Rentabilidad sostenible</div>
      </div>
      
      <div class="bg-surface p-3.5 rounded-md border border-borderline">
        <div class="text-[12px] font-medium text-primary mb-1">UnlockX</div>
        <div class="text-[10px] text-textmuted">Desbloquea el siguiente nivel</div>
      </div>
      
      <div class="bg-surface p-3.5 rounded-md border border-borderline">
        <div class="text-[12px] font-medium text-primary mb-1">Scaling Architecture</div>
        <div class="text-[10px] text-textmuted">Estructura para crecer sin caos</div>
      </div>

    </div>

    <div class="text-center mt-4 text-[11px] text-textmuted">
      + 94 herramientas adicionales dentro del sistema
    </div>
  </section>
  `
})
export class ToolsComponent {}
