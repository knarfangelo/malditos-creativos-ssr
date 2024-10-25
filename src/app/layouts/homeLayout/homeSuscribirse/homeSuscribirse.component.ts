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
      <div class="cuadro-rojo">

      </div>
      <main>
          <h1>Únete para unos <br>resultados malditos</h1>
          <div class="contenedor">
          <label for="subscribe">
            <input placeholder="TU NUMERO" type="text" name="subscribe" id="subscribe"><span class="boton">SUBSCRIBE</span>
          </label>
          <p>No te pierdas de lo último</p></div>
      </main>

    </header>
  `,
  styleUrl: './homeSuscribirse.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSuscribirseComponent { }
