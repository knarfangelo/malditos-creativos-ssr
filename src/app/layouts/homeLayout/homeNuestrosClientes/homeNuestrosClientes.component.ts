import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { defer } from 'rxjs';

@Component({
  selector: 'app-home-nuestros-clientes',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  template: `
    <header>
      <main>
        <div class="info">
        <h1><span class="punto"></span>Nuestros clientes</h1>
        <p>Más de 10 años de <br> experiencia en <br> todo tipo de <br> industrias</p></div>
        <a class="button-1" href="#contactanos">Contáctanos</a>
      </main>
      <section class="marcas">
        <img src="/empresas/1-speed-demons.webp" alt="speed demos">
        <img src="/empresas/2-cemex.webp" alt="Cemex">
        <img src="/empresas/3-olva.webp" alt="Olva Courier">
        <img src="/empresas/4-saludpol.webp" alt="Saludpol">
        <img src="/empresas/5-reed.webp" alt="Reed">
        <img src="/empresas/6-edicom.webp" alt="Edicom">
        <img src="/empresas/7-edupan.webp" alt="Edupan">
        <img src="/empresas/8-valle-del-cauca.webp" alt="Valle del Cauca">
        <img src="/empresas/9-santiago.webp" alt="Santiago Consultores">
        <img src="/empresas/10-jrm.webp" alt="JRM">
        <img src="/empresas/11-alcaldia-panama.webp" alt="Alcaldía de Panamá">
        <img src="/empresas/12-claro.webp" alt="Telefonia Claro">
        <img src="/empresas/13-css-panama.webp" alt="CSS Panamá">
        <img src="/empresas/14-jmt.webp" alt="JMT Outdoors">
        <img src="/empresas/15-intercorp.webp" alt="Intercorp">
        <img src="/empresas/16-cesar-vallejo.webp" alt="Universidad César Vallejo">
      </section>
      <a class="button-2" href="#contactanos">Contáctanos</a>
    </header>
    <section class="cliente">
      <div class="neutroyt">
        <div class="formato">
          <div class="titulacion">
        <span class="punto"></span>
        <h1>trabajamos con los mejores de la industria</h1></div></div>
        @defer (on viewport){
        <h2>neutroooyt <br> {{count}}K +</h2>
        } @placeholder {
          <div>neutroooyt <br> 500K +</div>
        }
      </div>
      <div class="face">
        @defer (on viewport) {
        <img class="animate__animated animate__backInUp" src="clientes/Murat-Soner.webp" alt="youtuber neutroooyt, Murat Soner">
        } @placeholder {
        <div style="width:27.5vw; height: 27.5vw;"></div>
        }
      </div>
    </section>

  `,
  styleUrl: './homeNuestrosClientes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeNuestrosClientesComponent {
  private readonly maxWidth: number = 47; // 47vw
  count: number = 0;
  private start: number = 0;
  private end: number = 500;
  private duration: number = 2000; // Duración total de la animación en milisegundos
  private startTime: number | null = null;



  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.startCounting();
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (isPlatformBrowser(this.platformId)) {
      const button = document.querySelector('.button-1') as HTMLElement;
      if (button) {
        const rect = button.getBoundingClientRect();
        const offsetX = event.clientX - rect.width / 2; // Centramos el botón en el cursor

        // Limitar el movimiento del botón para que no se salga del contenedor
        const container = button.closest('header')?.getBoundingClientRect();
        if (container) {
          const minX = container.left + 10; // margen de 10px
          const maxX = container.left + this.maxWidth * window.innerWidth / 100 - rect.width - 10; // margen de 10px
          button.style.left = `${Math.max(minX, Math.min(maxX, offsetX))}px`;
        }
      }
    }
  }

  startCounting() {
    const step = (timestamp: number) => {
      if (!this.startTime) this.startTime = timestamp; // Inicializar el tiempo de inicio

      const progress = timestamp - this.startTime; // Calcular el progreso de la animación
      this.count = Math.min(Math.floor((progress / this.duration) * this.end), this.end); // Calcular el valor actual del contador

      if (this.count < this.end) {
        requestAnimationFrame(step); // Continuar la animación
      }
    };

    requestAnimationFrame(step); // Iniciar la animación
  }
 
}
