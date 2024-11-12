import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Inject, Input, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NumberCounterComponent } from "../../../components/numberCounter/numberCounter.component";

@Component({
  selector: 'app-home-nuestros-clientes',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NumberCounterComponent
],
  template: `
    <header>
      @defer(on viewport){
      <main>
        <div class="info animate__animated animate__bounceInLeft">
        <h1><span class="punto" ></span> nuestros clientes ya no lloran <br> nuestros clientes facturan</h1>
        <p>10 años en la <br> cancha con todo tipo de proyectos</p></div>
        <a class="button-1" href="#contactanos">Contáctanos</a>
      </main>}
      @placeholder {
        <div></div>
      }
      @defer(on viewport){
      <section class="marcas animate__animated animate__bounceInRight">
        <img src="/empresas/1-speed-demons.webp" alt="speed demos">
        <img src="/empresas/3-olva.webp" alt="Olva Courier">
        <img src="/empresas/4-saludpol.webp" alt="Saludpol">
        <img src="/empresas/5-reed.webp" alt="Reed">
        <img src="/empresas/6-edicom.webp" alt="Edicom">
        <img src="/empresas/7-edupan.webp" alt="Edupan">
        <img src="/empresas/8-valle-del-cauca.webp" alt="Valle del Cauca">
        <img src="/empresas/9-santiago.webp" alt="Santiago Consultores">
        <img src="/empresas/10-jrm.webp" alt="JRM">
        <img src="/empresas/12-claro.webp" alt="Telefonia Claro">
        <img src="/empresas/13-css-panama.webp" alt="CSS Panamá">
        <img src="/empresas/14-jmt.webp" alt="JMT Outdoors">
        <img src="/empresas/15-intercorp.webp" alt="Intercorp">
        <img src="/empresas/16-cesar-vallejo.webp" alt="Universidad César Vallejo">
      </section>} @placeholder {
        <div></div>
      }
      <a class="button-2" href="#contactanos">Contáctanos</a>
    </header>
    <section class="cliente">
      <div class="neutroyt">
        <div class="formato">
          <div class="titulacion">
        <span class="punto"></span>
        <h1>trabajamos con los mejores influencers de la industria</h1></div></div>
        @defer (on viewport){
          
        <h2>neutroooyt <br>
        <app-number-counter [number]="500"
      [duration]=".5"></app-number-counter></h2>
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


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

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

}
