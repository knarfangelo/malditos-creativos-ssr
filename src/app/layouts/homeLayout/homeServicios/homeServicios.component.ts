import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { IServicio, servicios } from './mantenimiento/servicios';

@Component({
  selector: 'app-home-servicios',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <button #arrowButton>
        <svg xmlns="http://www.w3.org/2000/svg" 
             [ngStyle]="{ transform: arrowRotation }"
             width="5.5vw" height="5.5vw" viewBox="0 0 26 52" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6115 1.10522V45.9922L23.2713 37.3335L25.2813 39.3432L13.1902 51.4327L1.09912 39.3432L3.10913 37.3335L11.7689 45.9922V1.10522H14.6115Z" fill="white"/>
        </svg>
      </button>
      @defer (on viewport) {
      <main class="animate__animated animate__bounceInRight">
        <h1>CONOCE NUESTRA CHAMBA</h1>
      </main>
      }@placeholder {
        <div></div>  
      }
    </header>

    <div class="servicios">
      @for (servicio of servicios; track $index) {
      @defer ( on viewport) {
        <section class="card" [ngClass]="servicio.estilo">
          <div>
            <img [src]="servicio.img" [alt]="servicio.titulo">
            <h1>{{servicio.titulo}}</h1>
          </div>
          <section class="numeros">
            @for (estadistica of servicio.numeros; track $index) {
              <div class="info">
                <p class="info__number">{{estadistica.numeros}}</p>
                <p class="info__titulo">{{estadistica.titulo}}</p>
              </div>
            }
          </section>
        </section>
      } 
      @placeholder {
        <div style="width: 100%; height:55vw"></div>
      }
    }
    </div>
  `,
  styleUrls: ['./homeServicios.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeServiciosComponent {
  servicios: IServicio[] = servicios;
  arrowRotation: string = 'rotate(180deg)';

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const button = document.querySelector('button') as HTMLElement;
    if (button) {
      const rect = button.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;

      // Calcular la distancia del mouse al centro del botón
      const deltaX = event.clientX - buttonCenterX;
      const deltaY = event.clientY - buttonCenterY;

      // Usar Math.atan2 para obtener el ángulo entre el centro del botón y el mouse
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      // Actualizar el estilo con la rotación calculada
      this.arrowRotation = `rotate(${angle}deg)`;
    }
  }
}
