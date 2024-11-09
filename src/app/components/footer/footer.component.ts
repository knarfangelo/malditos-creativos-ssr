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
        <li><a href="https://www.instagram.com/malditoscreativosagencia?igsh=dDdpOTZ2YTdubHh3" target="_blank">INSTAGRAM</a></li>
        <li><a href="">FACEBOOK</a></li>
        <li><a href="https://www.tiktok.com/@malditoscreativosagencia?_t=8rFgFTARROA&_r=1" target="_blank">TIKTOK</a></li>
        <li><a href="">TWITCH</a></li>
        <li><a href="https://x.com/AgenciaMalditos" target="_blank">X</a></li>
        <li><a href="https://www.youtube.com/@malditoscreativosagencia" target="_blank">YOUTUBE</a></li>
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
