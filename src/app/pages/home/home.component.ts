import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemComponent } from '../../widgets/problem/problem.component';
import { MethodologyComponent } from '../../widgets/methodology/methodology.component';
import { PrinciplesComponent } from '../../widgets/principles/principles.component';
import { ResultsComponent } from '../../widgets/results/results.component';
import { DifferentiatorsComponent } from '../../widgets/differentiators/differentiators.component';
import { CtaFinalComponent } from '../../widgets/cta-final/cta-final.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ProblemComponent,
    MethodologyComponent,
    PrinciplesComponent,
    ResultsComponent,
    DifferentiatorsComponent,
    CtaFinalComponent
  ],
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

    <app-problem></app-problem>
    <app-methodology></app-methodology>
    <app-principles></app-principles>
    <app-results></app-results>
    <app-differentiators></app-differentiators>
    <app-cta-final></app-cta-final>
  </main>
  `
})
export class HomeComponent {}
