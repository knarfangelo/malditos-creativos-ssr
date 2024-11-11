import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home-carrusel-guia',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
  ],
  template: `
  <header>
  <div class="button-slide">
    @defer(on viewport){
    <div class="slides-point animate__animated animate__bounceInLeft">
    <div class="linea"></div>
    <div class="contenedor-la"> 
    <div class="linea-activa" [style.width]="lineWidth" ></div>
    </div>
      <span (click)="goToSlide(0)" class="punto-la"></span>
      <span (click)="goToSlide(1)" class="punto-la"></span>
      <span (click)="goToSlide(2)" class="punto-la"></span>
      <span (click)="goToSlide(3)"  class="punto-la"></span>
      <span  (click)="goToSlide(4)" class="punto-la"></span>
    </div>} @placeholder {
      <div></div>
    }

    @defer (on viewport) {
    <div class="slide-navigation animate__animated animate__bounceInRight">
      <button (click)="goToPrevSlide()"><svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 53 28" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M52.4732 16.5255H9.0211L16.1315 24.3329L13.1757 27.0259L1.79199 14.526L13.1757 2.026L16.1315 4.71896L9.0211 12.5264H52.4732V16.5255Z" fill="#BB0B0B"/>
      </svg></button>
      <button (click)="goToNextSlide()"><svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 53 28" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.167938 11.5479H43.62L36.5097 3.7405L39.4654 1.04744L50.8491 13.5474L39.4654 26.0474L36.5097 23.3544L43.62 15.5469H0.167938V11.5479Z" fill="#BB0B0B"/>
      </svg></button>
    </div>}@placeholder {
    <div></div>
    }
  </div>
  
    <swiper-container init=false  id="swiper-guia" class="animate__animated animate__bounceInRight">
      <swiper-slide (mouseenter)="onHover(0)" (mouseleave)="onLeave()">
        <div class="titulo">
      <span class="punto"></span>
        <h1>hablemos de tu visión</h1></div>      
        <h2>Nos juntamos contigo para entender qué es lo que realmente necesitas. ¿Estás buscando una web que esté chévere y rompa todo? ¿Un podcast que tenga su propio estilo? ¿O contenido que deje huella? Lo que sea, estamos full listos para ayudarte.</h2>
      </swiper-slide>
      <swiper-slide (mouseenter)="onHover(1)" (mouseleave)="onLeave()">
        <div class="titulo">
      <span class="punto"></span>
        <h1>te presentamos un<br>plan a tu medida</h1></div>        
        <h2>Lo primero es que te entendemos al 100%. Queremos saber bien tu visión y qué es lo que buscas, para luego traerte una propuesta que esté full personalizada, hecha solo para ti. Nuestro objetivo es que lo que te entreguemos te pegue como esperas y tenga el impacto que buscas.
        </h2>
      </swiper-slide>
      <swiper-slide (mouseenter)="onHover(2)" (mouseleave)="onLeave()">
        <div class="titulo">
      <span class="punto"></span>
        <h1>nos ponemos manos a <br>la obra</h1></div>      
        <h2>Cuando ya estamos con todo listo, arrancamos con el equipo en modo creativo, tirando ideas y dándole forma a tu proyecto. Te vamos contando todo paso a paso, para que siempre estés al tanto de cómo vamos. Y si en algún momento te da ganas de hacer algún cambio o toque, no hay problema, lo ajustamos sin drama para que todo siga en la misma sintonía con tu idea.
        </h2>
      </swiper-slide>
      <swiper-slide (mouseenter)="onHover(3)" (mouseleave)="onLeave()">
        <div class="titulo">
      <span class="punto"></span>
        <h1>¡Recibe tu proyecto <br> listo para brillar!</h1></div>        
        <h2>Cuando ya esté todo listo, te entregamos el resultado final optimizado, con todo pulido y listo para dejar a tu gente sorprendida. Y claro, seguimos contigo, dando soporte para que todo quede al 100% y sin problemas.
        </h2>
      </swiper-slide>
      <swiper-slide (mouseenter)="onHover(4)" (mouseleave)="onLeave()">
        <div class="titulo">
      <span class="punto"></span>
        <h1>Evaluamos y <br> mejoramos juntos</h1>  </div>      
        <h2>Al final, lo que más nos importa es saber qué piensas. Tu feedback es clave para seguir mejorando, y así estar siempre listos para lo que venga. ¡Pensando pe, mi chibolo pulpin!</h2>
      </swiper-slide>
    </swiper-container>
    <div class="slide-navigation-2">
      <button (click)="goToPrevSlide()"><svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 53 28" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M52.4732 16.5255H9.0211L16.1315 24.3329L13.1757 27.0259L1.79199 14.526L13.1757 2.026L16.1315 4.71896L9.0211 12.5264H52.4732V16.5255Z" fill="#BB0B0B"/>
      </svg></button>
      <button (click)="goToNextSlide()"><svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 53 28" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.167938 11.5479H43.62L36.5097 3.7405L39.4654 1.04744L50.8491 13.5474L39.4654 26.0474L36.5097 23.3544L43.62 15.5469H0.167938V11.5479Z" fill="#BB0B0B"/>
      </svg></button>
    </div>
    </header>
  `,
  styleUrl: './homeCarruselGuia.component.css',
})
export class HomeCarruselGuiaComponent implements OnInit {

  swiperElements = signal<SwiperContainer | null>(null);
  lineWidth: string = '0%'; 
  startX: number = 0; // Para almacenar la posición inicial del toque
  endX: number = 0;   // Para almacenar la posición final del toque

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
   
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
    register();
    const swiperElemConstructor = document.querySelector('#swiper-guia');
      const swiperOptions: SwiperOptions = {
        navigation:{
          enabled:true,
          nextEl:'.swiper-button-next',
          prevEl:'.swiper-button-prev',
        },
        loop: false,
        effect: 'fade',
        slidesPerView: 1,
        speed: 1000,
        on: {
          slideChange: () => {
            const currentIndex = this.getCurrentSlideIndex();
            if (currentIndex !== null) {
              this.updateLineWidth(currentIndex as number);
            }
          }
        }
      };
      Object.assign(swiperElemConstructor!, swiperOptions);
      this.swiperElements.set(swiperElemConstructor as SwiperContainer);
      this.swiperElements()?.initialize();  
      this.updateLineWidth(0);
    }
    
  }

  

  goToSlide(index: number) {
    if (this.swiperElements()?.swiper) {
      this.swiperElements()?.swiper.slideTo(index);
      this.updateLineWidth(index); // Asegúrate de actualizar la línea activa
    }
  }

  onHover(index: number) {
    this.updateLineWidth(index); // Actualiza la línea activa en hover
  }

  onLeave() {
    this.updateLineWidth(this.getCurrentSlideIndex() || 0); // Retorna a la posición actual si no hay hover
  }

  getCurrentSlideIndex() {
    if (this.swiperElements()?.swiper) {
      return this.swiperElements()?.swiper.activeIndex;
    }
    return null;
  }
  goToNextSlide() {
    if (this.swiperElements()?.swiper) {
      this.swiperElements()?.swiper.slideNext();
    }
  }

  // Método para ir al slide anterior
  goToPrevSlide() {
    if (this.swiperElements()?.swiper) {
      this.swiperElements()?.swiper.slidePrev();
    }
  }
  
  updateLineWidth(index: number) {
    const totalSlides = 5; // Número total de botones/slides
    const buttonWidthPercentage = 0; // Ajusta según el ancho relativo de los botones en porcentaje
    const usableWidth = 100 - (totalSlides * buttonWidthPercentage); // El ancho disponible menos el espacio ocupado por los botones
    const percentage = ((index) / (totalSlides - 1)) * usableWidth; // Calcula el ancho restante
    this.lineWidth = `${percentage + (buttonWidthPercentage * index)}%`; // Agrega el espacio ocupado por los botones anteriores
  
    // Llamar a updateActiveButton para actualizar el botón activo
    this.updateActiveButton(index);
  }
  
  updateActiveButton(index: number) {
    const buttons = document.querySelectorAll('.punto-la');
    buttons.forEach((button, idx) => {
      if (idx === index) {
        button.classList.add('active'); // Clase CSS para botón activo
      } else {
        button.classList.remove('active'); // Elimina la clase de los demás
      }
    });
  }


}
