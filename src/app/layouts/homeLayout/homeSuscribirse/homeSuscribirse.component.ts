import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-suscribirse',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      @defer(on viewport){
      <div class="cuadro-rojo animate__animated animate__bounceInLeft">
      </div>
      <main class="animate__animated animate__bounceInRight">
          <h1>nos tomamos unas <br> chelas ?</h1>
          <div class="contenedor">
          <label for="subscribe">
            <input placeholder="TU CELAR" type="text" name="subscribe" id="subscribe">
            <span class="flecha"><svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_96_2434" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="63" height="63">
<path d="M63.063 1.62695H1.12701V63.5629H63.063V1.62695Z" fill="white"/>
</mask>
<g mask="url(#mask0_96_2434)">
<path d="M45.0361 18.5459L45.0363 48.5572M45.0361 18.5459L15.0215 18.5563M45.0361 18.5459L15.0247 48.5572" stroke="white" stroke-width="6.1936"/>
</g>
</svg>
</span>
            <span class="boton">SUBSCRIBE</span>
          </label></div>
      </main>
      } @placeholder {
        <div class="relleno"></div>
      }
    </header>
  `,
  styleUrl: './homeSuscribirse.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSuscribirseComponent { }
