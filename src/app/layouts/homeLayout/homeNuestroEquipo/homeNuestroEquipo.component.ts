import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID } from '@angular/core';
import { register } from 'swiper/element';
import { nuestroEquipo } from './matenimiento/nuestroEquipo';

@Component({
  selector: 'app-home-nuestro-equipo',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <header>
      @defer (on viewport) {
      <swiper-container loop=true autoplay=true>
        <swiper-slide *ngFor="let miembro of nuestroEquipo">
          <img class="equipo animate__animated animate__bounceInLeft" [src]="miembro.src" [alt]="miembro.alt" />
        </swiper-slide>
      </swiper-container>
      }@placeholder {
        <div></div>
      }
      @defer (on viewport) {
      <main class="animate__animated animate__bounceInRight">
        <div class="contenedor">
          <span class="punto"></span>
          <h1>Nuestro equipo de trabajo</h1>
        </div>
        <h2>con más de 10 capos que harán realidad tus locuras.</h2>
      </main>}
      @placeholder {
        <div></div>
      }
    </header>
  `,
  styleUrls: ['./homeNuestroEquipo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeNuestroEquipoComponent {
  nuestroEquipo = nuestroEquipo;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      register();
    }
  }
}
