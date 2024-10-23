import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
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
    <div class="slides-point">
    <div class="linea"></div>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
    </div>
    <div class="slide-navigation">
      <button class="swiper-button-prev"><svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 53 28" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M52.4732 16.5255H9.0211L16.1315 24.3329L13.1757 27.0259L1.79199 14.526L13.1757 2.026L16.1315 4.71896L9.0211 12.5264H52.4732V16.5255Z" fill="#BB0B0B"/>
      </svg></button>
      <button class="swiper-button-next"><svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 53 28" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.167938 11.5479H43.62L36.5097 3.7405L39.4654 1.04744L50.8491 13.5474L39.4654 26.0474L36.5097 23.3544L43.62 15.5469H0.167938V11.5479Z" fill="#BB0B0B"/>
      </svg></button>
    </div>
  </div>
    <swiper-container init=false class="swiper-guia">
      <swiper-slide>
        <div class="titulo">
      <span class="punto"></span>
        <h1>hablemos de tu visón</h1></div>      
        <h2>Nos reunimos contigo para entender exactamente lo que necesitas. Ya sea un sitio web innovador, una transmisión de podcast profesional o contenido impactante.</h2>
      </swiper-slide>
      <swiper-slide>
        <div class="titulo">
      <span class="punto"></span>
        <h1>te presentamos un<br>plan a tu medida</h1></div>        
        <h2>Tras entender tu visión, te presentamos una propuesta creativa que responde a tus necesidades, con soluciones diseñadas específicamente para ti, garantizando resultados de alto impacto.</h2>
      </swiper-slide>
      <swiper-slide>
        <div class="titulo">
      <span class="punto"></span>
        <h1>nos ponemos manos a <br>la obra</h1></div>      
        <h2>Nuestro equipo de expertos comienza a trabajar en la creación, manteniéndote informado en cada etapa. Además, tendrás la oportunidad de revisar y ajustar para asegurarte de que el proyecto va en la dirección que imaginas.</h2>
      </swiper-slide>
      <swiper-slide>
        <div class="titulo">
      <span class="punto"></span>
        <h1>¡Recibe tu proyecto <br> listo para brillar!</h1></div>        
        <h2>Te entregamos el resultado final, optimizado y listo para impresionar a tu audiencia. Y, por supuesto, te ofrecemos soporte continuo para asegurarnos de que todo funcione a la perfección.</h2>
      </swiper-slide>
      <swiper-slide>
        <div class="titulo">
      <span class="punto"></span>
        <h1>Evaluamos y <br> mejoramos juntos</h1>  </div>      
        <h2>Una vez entregado el proyecto, nos gustaría recibir tus comentarios. Creemos en la retroalimentación para perfeccionar nuestro trabajo y adaptarnos a tus futuras necesidades.</h2>
      </swiper-slide>
    </swiper-container>
    </header>
  `,
  styleUrl: './homeCarruselGuia.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCarruselGuiaComponent implements OnInit {

  swiperElements = signal<SwiperContainer | null>(null);

  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
   
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
    register();
    const swiperElemConstructor = document.querySelector('.swiper-guia');
      const swiperOptions: SwiperOptions = {
        navigation:{
          enabled:true,
          nextEl:'.swiper-button-next',
          prevEl:'.swiper-button-prev',
        },
        loop: true,
        slidesPerView: 'auto',
        speed: 2000,
      };
      Object.assign(swiperElemConstructor!, swiperOptions);
      this.swiperElements.set(swiperElemConstructor as SwiperContainer);
      this.swiperElements()?.initialize();  
    }
  }
  

}
