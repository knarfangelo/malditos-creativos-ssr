import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <footer>
      <div class="contenedor">
      <ul>
        <li>INSTAGRAM</li>
        <li>FACEBOOK</li>
        <li>TIKTOK</li>
        <li>TWITCH</li>
        <li>X</li>
        <li>YOUTUBE</li>
      </ul>
      <ul>
        <li>todas los derechos reservados</li>
        <li>politica de cookies</li>
      </ul>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
