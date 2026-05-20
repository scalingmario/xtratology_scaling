import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../widgets/hero/hero.component';
import { PrinciplesComponent } from '../../widgets/principles/principles.component';
import { ProblemComponent } from '../../widgets/problem/problem.component';
import { ToolsComponent } from '../../widgets/tools/tools.component';
import { CtaFinalComponent } from '../../widgets/cta-final/cta-final.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    PrinciplesComponent,
    ProblemComponent,
    ToolsComponent,
    CtaFinalComponent
  ],
  template: `
    <main class="w-full bg-white">
      <app-hero></app-hero>
      
      <app-principles></app-principles>
      
      <app-problem></app-problem>

      <app-tools></app-tools>

      <app-cta-final></app-cta-final>
      
    </main>
  `
})
export class HomeComponent {}
