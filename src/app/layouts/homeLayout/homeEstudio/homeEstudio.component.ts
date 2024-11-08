import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-estudio',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  @defer (on viewport) {
    <header class="animate__animated animate__bounceInLeft">
      <div class="info">
      <h1>Conoce <br>nuestro <br> estudio.</h1>
      <h2>gozando y facturando</h2></div>
      <img class="estudio" src="estudio/estudio.webp" alt="estudio choose agencia">
    </header>} @placeholder {
      <div class="relleno"></div>
    }
  `,
  styleUrl: './homeEstudio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeEstudioComponent {
  
}
