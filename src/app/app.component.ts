import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './widgets/header/header.component';
import { FooterComponent } from './widgets/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="min-h-screen flex flex-col font-sans">
      <app-header></app-header>
      <div class="flex-grow">
        <router-outlet></router-outlet>
      </div>
      <app-footer></app-footer>
    </div>
  `,
})
export class AppComponent {}
