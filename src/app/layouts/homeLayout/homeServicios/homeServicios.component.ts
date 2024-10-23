import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IServicio, servicios } from './mantenimiento/servicios';

@Component({
  selector: 'app-home-servicios',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <button><svg xmlns="http://www.w3.org/2000/svg" width="5.5vw" height="5.5vw" viewBox="0 0 26 52" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6115 1.10522V45.9922L23.2713 37.3335L25.2813 39.3432L13.1902 51.4327L1.09912 39.3432L3.10913 37.3335L11.7689 45.9922V1.10522H14.6115Z" fill="white"/>
      </svg>
      </button>
      <main>
      <h1>CONOCE NUESTROS SERVICIOS</h1>
      <p>SOMOS LOS MEJORES EN EL MUNDO DIGITAL</p>
      </main>
    </header>
    <div class="servicios">
    @for (servicio of servicios; track $index) {
      <section class="card">
        <div>
        <img [src]="servicio.img" [alt]="servicio.titulo">
        <h1>{{servicio.titulo}}</h1></div>
        <section class="numeros">
          
          @for (estadistica of servicio.numeros; track $index)
          {
          <div class="info">
            <p class="info__number">{{estadistica.numeros}}</p>
            <p class="info__titulo">{{estadistica.titulo}}</p>
          </div>
          }
        </section>
      </section>
    }
    </div>
  `,
  styleUrl: './homeServicios.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeServiciosComponent {
  servicios: IServicio[] = servicios;
}
