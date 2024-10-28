import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-redes-sociales',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  template: `
    <header>
      <main>
        <div class="contenedor">
          <span class="punto"></span>
          <h1>Estamos en todas <br> las plataformas</h1>
        </div>
        <h2>ESTAMOS ORIENTADOS A LOS RESULTADOS. <br> SEA CUAL SEA LA PLATAFORMA</h2>
      </main>

      <section class="redes-sociales">
        <ng-container *ngFor="let red of redes">
          <a [href]="red.src" target="_blank">
          <img 
            (mouseenter)="hovered = red"
            (mouseleave)="hovered = null"
            [class.animate__animated]="hovered === red"
            [class.animate__bounce]="hovered === red"
            [src]="red.img" 
            [alt]="red.alt"></a>
        </ng-container>
      </section>
    </header>
  `,
  styleUrls: ['./homeRedesSociales.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeRedesSocialesComponent {
  hovered: { img: string; alt: string } | null = null;

  redes = [
    { img: 'redes/twitch.svg', alt: 'Twitch Malditos Creativos' },
    { img: 'redes/tiktok.svg', alt: 'TikTok Malditos Creativos', src: 'https://www.tiktok.com/@malditoscreativosagencia?lang=en' },
    { img: 'redes/facebook.svg', alt: 'Facebook Malditos Creativos' },
    { img: 'redes/youtube.svg', alt: 'YouTube Malditos Creativos', src: 'https://www.youtube.com/@MalditosCreativosAgencia' },
    { img: 'redes/xcorp.svg', alt: 'Twitter Malditos Creativos' },
    { img: 'redes/instagram.svg', alt: 'Instagram Malditos Creativos', src:'https://www.instagram.com/malditoscreativosagencia/' },
    { img: 'redes/vimeo.svg', alt: 'Vimeo Malditos Creativos' },
    { img: 'redes/kick.svg', alt: 'Kick Malditos Creativos' },
  ];
}
