import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-video',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
      <header>
        <div class="video">
          VIDEO
        </div>
        <main>
          <h1>
          ¿Listo para desafiar <br>
          lo convencional?
          </h1>
          <div class="conoce-contenido">
            <h2 class="titulo">CONOCE NUESTRO CONTENIDO</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="5vw" height="3vw" viewBox="0 0 96 47" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.965538 19.8522L85.1597 21.0338L69.1466 4.56367L72.9692 0.846664L95.3272 23.8427L72.3327 46.2024L68.6159 42.3795L85.0849 26.3653L0.890715 25.1837L0.965538 19.8522Z" fill="white"/>
            </svg>
          </div>
        </main>
      </header>  
  `,
  styleUrl: './homeVideo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeVideoComponent { }
