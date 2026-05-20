import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../widgets/hero/hero.component';
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
    HeroComponent,
    ProblemComponent,
    MethodologyComponent,
    PrinciplesComponent,
    ResultsComponent,
    DifferentiatorsComponent,
    CtaFinalComponent
  ],
  template: `
  <main class="w-full">
    <app-hero></app-hero>
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
