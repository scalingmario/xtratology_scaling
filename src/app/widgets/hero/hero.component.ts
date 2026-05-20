import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
  <section class="bg-gradient-to-b from-white to-slate-50 pt-12 pb-10 px-8 text-center border-b border-borderline">
    
    <div class="inline-block bg-accent/10 text-primary text-[10px] tracking-[0.2em] px-4 py-1.5 rounded-full font-medium mb-5">
      METODOLOGÍA PROPIETARIA
    </div>

    <h1 class="text-4xl md:text-5xl font-medium text-primary leading-[1.1] mb-4 tracking-tight">
      La ciencia detrás de las<br/>empresas que escalan <span class="text-accent italic">en serio</span>
    </h1>

    <p class="text-sm md:text-base text-textmuted max-w-xl mx-auto mb-8 leading-relaxed">
      Xtratology es el sistema propietario de Scaling. 5 Principios. 27 Hábitos de Escalamiento. Más de 100 herramientas. Diseñado para que el crecimiento deje de depender de ti.
    </p>

    <div class="flex flex-wrap justify-center gap-8 md:gap-12 mt-6 pt-6 border-t border-primary/10">
      <div class="flex flex-col items-center">
        <div class="text-3xl font-medium text-primary">5</div>
        <div class="text-[10px] text-textmuted tracking-widest mt-1">PRINCIPIOS</div>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-3xl font-medium text-primary">27</div>
        <div class="text-[10px] text-textmuted tracking-widest mt-1">HÁBITOS</div>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-3xl font-medium text-primary">100+</div>
        <div class="text-[10px] text-textmuted tracking-widest mt-1">HERRAMIENTAS</div>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-3xl font-medium text-warning">6x</div>
        <div class="text-[10px] text-textmuted tracking-widest mt-1">RESULTADOS</div>
      </div>
    </div>
    
  </section>
  `
})
export class HeroComponent {}
