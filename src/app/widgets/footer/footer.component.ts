import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
  <footer class="bg-primary py-6 text-center border-t border-white/10">
    <div class="text-[11px] text-blue-100/70 tracking-wide">
      © 2026 Scaling LLC. Todos los derechos reservados. | scaling.llc
    </div>
  </footer>
  `
})
export class FooterComponent {}
