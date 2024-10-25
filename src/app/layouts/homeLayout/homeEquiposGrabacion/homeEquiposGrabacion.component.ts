import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { equipos, IEquipo } from './matenimiento/equipo';

@Component({
  selector: 'app-home-equipos-grabacion',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <main>
      <div class="flechas">
        <button class="swiper-equipos-prev"><svg width="3vw" height="3vw" viewBox="0 0 52 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.6377 15.1389H8.18565L15.296 22.9463L12.3403 25.6393L0.956543 13.1394L12.3403 0.639404L15.296 3.33236L8.18565 11.1398H51.6377V15.1389Z" fill="#BB0B0B"/>
        </svg>
        </button>
        <button class="swiper-equipos-next"><svg width="3vw" height="3vw" viewBox="0 0 52 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.332245 11.1612H43.7843L36.674 3.35378L39.6297 0.660719L51.0134 13.1607L39.6297 25.6606L36.674 22.9677L43.7843 15.1602H0.332245V11.1612Z" fill="#BB0B0B"/>
        </svg>
        </button>
      </div>
      <div class="titulo">
        <h1>CONOCE NUESTROS EQUIPOS <span>DE GRABACION Y FOTOGRAFÍA</span></h1>
      </div>
      </main>
      <swiper-container init=false class="swiper-equipos">
        @for (equipo of equipos; track $index) {
        <swiper-slide>
          
          <div class="contenedor">
          <h1><span class="punto"></span>{{equipo.titulo}}</h1>
          <img class="equipos" [src]="equipo.img" [alt]="equipo.titulo">
          </div>
          <p class="descripcion">{{equipo.descripcion}}</p>
        </swiper-slide>
        }
      </swiper-container>
      <div class="flechas-2">
        <button class="swiper-equipos-prev"><svg width="3vw" height="3vw" viewBox="0 0 52 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.6377 15.1389H8.18565L15.296 22.9463L12.3403 25.6393L0.956543 13.1394L12.3403 0.639404L15.296 3.33236L8.18565 11.1398H51.6377V15.1389Z" fill="#BB0B0B"/>
        </svg>
        </button>
        <button class="swiper-equipos-next"><svg width="3vw" height="3vw" viewBox="0 0 52 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.332245 11.1612H43.7843L36.674 3.35378L39.6297 0.660719L51.0134 13.1607L39.6297 25.6606L36.674 22.9677L43.7843 15.1602H0.332245V11.1612Z" fill="#BB0B0B"/>
        </svg>
        </button>
      </div>
    </header>
    
  `,
  styleUrl: './homeEquiposGrabacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeEquiposGrabacionComponent {

  equipos:IEquipo[] = equipos; 
  swiperElements = signal<SwiperContainer | null>(null);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
   
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
    register();
    const swiperElemConstructor = document.querySelector('.swiper-equipos');
      const swiperOptions: SwiperOptions = {
        navigation:{
          enabled:true,
          nextEl:'.swiper-equipos-next',
          prevEl:'.swiper-equipos-prev',
        },
        spaceBetween: 30,
        loop: false,
        effect: 'slide',
        fadeEffect: {
          crossFade: true, // Activa el crossFade para un efecto más suave
        },
        slidesPerView: 'auto',
        speed: 1000,
      };
      Object.assign(swiperElemConstructor!, swiperOptions);
      this.swiperElements.set(swiperElemConstructor as SwiperContainer);
      this.swiperElements()?.initialize();  
    }
  }

}
