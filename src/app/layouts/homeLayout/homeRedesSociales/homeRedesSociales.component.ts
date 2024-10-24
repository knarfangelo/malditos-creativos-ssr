import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-redes-sociales',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <main>
        <h1>estamos en todas <br> las plataformas</h1>
        <h2>ESTAMOS ORIENTADOS A LOS RESULTADOS. <br>
        SEA CUAL SEA LA PLATAFORMA </h2>
      </main>
      <section class="redes-sociales">
        <img src="redes/twitch.svg" alt="twith malditos creativos">
        <img src="redes/tiktok.svg" alt="tiktok malditos creativos">
        <img src="redes/facebook.svg" alt="facebook malditos creativos">
        <img src="redes/youtube.svg" alt="youtube malditos creativos">
        <img src="redes/xcorp.svg" alt="twitter malditos creativos">
        <img src="redes/instagram.svg" alt="instagram malditos creativos">
      </section>
    </header>
  `,
  styleUrl: './homeRedesSociales.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeRedesSocialesComponent { }
