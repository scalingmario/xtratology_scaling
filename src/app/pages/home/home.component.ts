import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../widgets/hero/hero.component';
import { PrinciplesComponent } from '../../widgets/principles/principles.component';
import { ProblemComponent } from '../../widgets/problem/problem.component';
import { MethodologyComponent } from '../../widgets/methodology/methodology.component';
import { ResultsComponent } from '../../widgets/results/results.component';
import { DifferentiatorsComponent } from '../../widgets/differentiators/differentiators.component';
import { CtaFinalComponent } from '../../widgets/cta-final/cta-final.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    PrinciplesComponent,
    ProblemComponent,
    MethodologyComponent,
    ResultsComponent,
    DifferentiatorsComponent,
    CtaFinalComponent
  ],
  template: `
    <main class="w-full bg-white">
      <app-hero></app-hero>
      
      <app-principles></app-principles>
      
      <app-problem></app-problem>
      
    </main>
  `
})
export class HomeComponent {}
