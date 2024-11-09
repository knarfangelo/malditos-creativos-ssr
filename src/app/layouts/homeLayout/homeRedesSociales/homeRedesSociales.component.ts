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
      @defer(on viewport){
      <main class="animate__animated animate__bounceInLeft">
        <div class="contenedor">
          <span class="punto"></span>
          <h1>DONDE MIRES <br> AHÍ ESTAREMOS</h1>
        </div>
        <h2>EN CADA UNA DE LAS REDES SOCIALES</h2>
      </main>
      }@placeholder {
        <div class="relleno"></div>
      }
      @defer(on viewport){
      <section class="redes-sociales  animate__animated animate__bounceInRight">
        <ng-container *ngFor="let red of redes">
          <a target="_blank">
          <img 
            (mouseenter)="hovered = red"
            (mouseleave)="hovered = null"
            [class.animate__animated]="hovered === red"
            [class.animate__bounce]="hovered === red"
            [src]="red.img" 
            [alt]="red.alt"></a>
        </ng-container>
      </section>} @placeholder {
        <div class="relleno"></div>
      }
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
    { img: 'redes/xcorp.svg', alt: 'Twitter Malditos Creativos', src:'' },
    { img: 'redes/instagram.svg', alt: 'Instagram Malditos Creativos', src:'https://www.instagram.com/malditoscreativosagencia/' },
    { img: 'redes/vimeo.svg', alt: 'Vimeo Malditos Creativos' },
    { img: 'redes/kick.svg', alt: 'Kick Malditos Creativos' },
  ];
}
