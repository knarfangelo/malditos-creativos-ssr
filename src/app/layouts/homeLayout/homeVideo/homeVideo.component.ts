import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-video',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <div class="video animate__animated animate__backInLeft">
        <video #videoPlayer 
               oncontextmenu="return false;" 
               draggable="false" 
               playsinline 
               autoplay 
               muted 
               loop 
               preload="auto" 
               class="video-mc">
          <source src="videos/logo-animado.mp4" type="video/mp4">
          Tu navegador no soporta el formato de video.
        </video>
      </div>
      <main class="animate__animated animate__bounceInRight">
        <h1>¿listo para conocer nuestras locuras?</h1>
        <div class="conoce-contenido">
          <h2 class="titulo">CONOCE NUESTRO CONTENIDO</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="5vw" height="3vw" viewBox="0 0 96 47" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.965538 19.8522L85.1597 21.0338L69.1466 4.56367L72.9692 0.846664L95.3272 23.8427L72.3327 46.2024L68.6159 42.3795L85.0849 26.3653L0.890715 25.1837L0.965538 19.8522Z" fill="white"/>
          </svg>
        </div>
      </main>
    </header>  
  `,
  styleUrls: ['./homeVideo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeVideoComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoElement: ElementRef<HTMLVideoElement> | undefined;

  ngAfterViewInit() {
    const video: HTMLVideoElement | undefined = this.videoElement?.nativeElement;

    // Asegurarse de que el video esté listo para reproducirse
    if (video) {
      video.addEventListener('canplay', () => {
        // Reproducir el video una vez que esté listo
        video.play().catch((error) => {
          console.error('Error al intentar reproducir el video:', error);
        });
      });

      // Verificar si el video ya está listo para reproducirse
      if (video.readyState >= 3) { // readyState '3' indica que el video puede reproducirse
        video.play().catch((error) => {
          console.error('Error al intentar reproducir el video:', error);
        });
      }
    }
  }
}
