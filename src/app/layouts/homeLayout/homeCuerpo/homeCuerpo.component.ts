import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-home-cuerpo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header >
      <div class="responsive-box animate__animated animate__bounceInLeft">
        <div>
        capos <br> haciendo<br>marketing<br>digital para<br>ganar
        <br></div>
      </div>
      <div class="responsive-logo-play">
        <img class="logo animate__animated animate__bounceInDown" src="logo-malditos-creativos.svg" alt="logo-de-malditos-creativos">
        <div class="contenedor-play-video animate__animated animate__bounceInRight">
        <button class="play-video" [@flyInOut]>
          <span class="button-text">Activate</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.1vw" height="1.1vw" viewBox="0 0 8 11" fill="none">
            <path d="M0.0598145 0.329834L7.16981 5.30483L0.0598145 10.2798V0.329834Z" fill="white"/>
          </svg>
        </button></div>
      </div>
    </header>
  `,
  styleUrls: ['./homeCuerpo.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0) rotate(0deg)' })),
      transition('void => *', [
        style({ transform: 'translateX(-110%) rotate(0deg)' }),
        animate(2000, style({ transform: 'translateX(0) rotate(360deg)' }))
      ]),
      transition('* => void', [
        animate(3000, style({ transform: 'translateX(100%) rotate(0deg)' }))
      ]),
    ]),
  ]
})
export class HomeCuerpoComponent implements OnInit {
  isBrowser: boolean = false;
  rotateState: string = 'default';

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

}
