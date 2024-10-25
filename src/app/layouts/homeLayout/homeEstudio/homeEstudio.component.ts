import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-estudio',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <div class="info">
      <h1>Conoce <br>nuestro <br> estudio.</h1>
      <h2>Estandares mas altos del mercado</h2></div>
      <img class="estudio" src="estudio/estudio.webp" alt="estudio choose agencia">
    </header>
  `,
  styleUrl: './homeEstudio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeEstudioComponent {
  
}
