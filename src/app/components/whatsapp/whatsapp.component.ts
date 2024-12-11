import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [],
  template: `
    <a href="" target="_blank" class="whatsapp">
      <img src="whatsapp.svg" alt="">
    </a>
  `,
  styleUrl: './whatsapp.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappComponent { }
