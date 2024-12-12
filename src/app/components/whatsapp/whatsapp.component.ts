import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [],
  template: `
    <a href="https://wa.me/51932188688?text=Hola%20Choose%0AMe%20gustaria%20contratar%20los%20servicios%20que%20ofrecen" target="_blank" class="whatsapp">
      <img src="whatsapp.svg" alt="whatsapp de malditos creativos">
    </a>
  `,
  styleUrl: './whatsapp.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappComponent { }
