import { Component } from '@angular/core';

@Component({
  selector: 'app-principles',
  standalone: true,
  template: `
  <section class="bg-white py-14 px-8">
    <div class="text-center mb-10">
      <h2 class="text-[22px] font-medium text-primary mb-1.5">Los 5 Principios de Xtratology</h2>
      <p class="text-xs text-textmuted">Cada principio resuelve una dimensión del escalamiento.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-5 gap-3 max-w-6xl mx-auto">
      
      <div class="bg-white border border-borderline border-t-[3px] border-t-principle-team rounded-md p-4 text-center">
        <div class="w-8 h-8 rounded-full bg-principle-team/10 flex items-center justify-center text-principle-team mx-auto mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        </div>
        <div class="text-[11px] font-medium text-primary mb-1">Team Strategy</div>
        <div class="text-[9px] text-textmuted leading-relaxed">Alinea a tu equipo hacia una sola visión</div>
      </div>

      <div class="bg-white border border-borderline border-t-[3px] border-t-principle-business rounded-md p-4 text-center">
        <div class="w-8 h-8 rounded-full bg-principle-business/10 flex items-center justify-center text-principle-business mx-auto mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
        </div>
        <div class="text-[11px] font-medium text-primary mb-1">Business Strategy</div>
        <div class="text-[9px] text-textmuted leading-relaxed">Define tu posición estratégica única</div>
      </div>

      <div class="bg-white border border-borderline border-t-[3px] border-t-principle-execution rounded-md p-4 text-center">
        <div class="w-8 h-8 rounded-full bg-principle-execution/10 flex items-center justify-center text-principle-execution mx-auto mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        </div>
        <div class="text-[11px] font-medium text-primary mb-1">Execution Strategy</div>
        <div class="text-[9px] text-textmuted leading-relaxed">Convierte planes en resultados medibles</div>
      </div>

      <div class="bg-white border border-borderline border-t-[3px] border-t-principle-cash rounded-md p-4 text-center">
        <div class="w-8 h-8 rounded-full bg-principle-cash/10 flex items-center justify-center text-principle-cash mx-auto mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="M10 10h4"></path><path d="M10 14h4"></path></svg>
        </div>
        <div class="text-[11px] font-medium text-primary mb-1">Cash Flow Strategy</div>
        <div class="text-[9px] text-textmuted leading-relaxed">Haz que el crecimiento financie el crecimiento</div>
      </div>

      <div class="bg-white border border-borderline border-t-[3px] border-t-principle-innovation rounded-md p-4 text-center">
        <div class="w-8 h-8 rounded-full bg-principle-innovation/10 flex items-center justify-center text-principle-innovation mx-auto mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>
        </div>
        <div class="text-[11px] font-medium text-primary mb-1">Innovation Strategy</div>
        <div class="text-[9px] text-textmuted leading-relaxed">Sistematiza la innovación como ventaja</div>
      </div>

    </div>
  </section>
  `
})
export class PrinciplesComponent {}
