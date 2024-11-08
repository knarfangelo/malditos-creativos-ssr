import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-nuestro-equipo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      @defer (on viewport) {
      <img class="equipo animate__animated animate__bounceInLeft" src="equipo-trabajo/equipo-trabajo.webp" alt="equipo de trabajo">
      }@placeholder {
        <div></div>
      }
      @defer (on viewport){
      <main class="animate__animated animate__bounceInRight">
        <div class="contenedor">
        <span class="punto"></span>
        <h1>Nuestro equipo de trabajo</h1></div>
        <h2>con más de 10 capos que harán realidad tus locuras.</h2>
      </main>}
      @placeholder {
        <div></div>
      }
    </header>
  `,
  styleUrl: './homeNuestroEquipo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeNuestroEquipoComponent { }
