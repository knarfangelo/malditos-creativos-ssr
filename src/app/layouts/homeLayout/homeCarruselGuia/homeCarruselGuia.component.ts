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
        <h2>Nos reunimos contigo para entender exactamente lo que necesitas. Ya sea un sitio web innovador, una transmisión de podcast profesional o contenido impactante.</h2>
      </swiper-slide>
      <swiper-slide (mouseenter)="onHover(1)" (mouseleave)="onLeave()">
        <div class="titulo">
      <span class="punto"></span>
        <h1>te presentamos un<br>plan a tu medida</h1></div>        
        <h2>Tras entender tu visión, te presentamos una propuesta creativa que responde a tus necesidades, con soluciones diseñadas específicamente para ti, garantizando resultados de alto impacto.</h2>
      </swiper-slide>
      <swiper-slide (mouseenter)="onHover(2)" (mouseleave)="onLeave()">
        <div class="titulo">
      <span class="punto"></span>
        <h1>nos ponemos manos a <br>la obra</h1></div>      
        <h2>Nuestro equipo de expertos comienza a trabajar en la creación, manteniéndote informado en cada etapa. Además, tendrás la oportunidad de revisar y ajustar para asegurarte de que el proyecto va en la dirección que imaginas.</h2>
      </swiper-slide>
      <swiper-slide (mouseenter)="onHover(3)" (mouseleave)="onLeave()">
        <div class="titulo">
      <span class="punto"></span>
        <h1>¡Recibe tu proyecto <br> listo para brillar!</h1></div>        
        <h2>Te entregamos el resultado final, optimizado y listo para impresionar a tu audiencia. Y, por supuesto, te ofrecemos soporte continuo para asegurarnos de que todo funcione a la perfección.</h2>
      </swiper-slide>
      <swiper-slide (mouseenter)="onHover(4)" (mouseleave)="onLeave()">
        <div class="titulo">
      <span class="punto"></span>
        <h1>Evaluamos y <br> mejoramos juntos</h1>  </div>      
        <h2>Una vez entregado el proyecto, nos gustaría recibir tus comentarios. Creemos en la retroalimentación para perfeccionar nuestro trabajo y adaptarnos a tus futuras necesidades.</h2>
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
