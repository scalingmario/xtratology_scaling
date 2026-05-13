import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button [class]="variants[variant]" class="px-6 py-2 rounded-lg transition-all duration-300 font-medium cursor-pointer">
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';

  variants = {
    primary: 'bg-primary text-white hover:bg-opacity-90 shadow-md',
    secondary: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white'
  };
}
