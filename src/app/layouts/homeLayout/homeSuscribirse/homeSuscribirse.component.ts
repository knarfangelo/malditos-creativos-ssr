import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { SuscripcionService } from '../../../services/Suscripcion.service';
import { Cliente } from '../../../interface/Cliente';

@Component({
  selector: 'app-home-suscribirse',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
    <header>
      @defer(on viewport){
      <div class="cuadro-rojo animate__animated animate__bounceInLeft">
        <img src="contactanos/contactanos.webp" alt="">
      </div>
      <main class="animate__animated animate__bounceInRight">
        <h1>nos tomamos unas <br> chelas ?</h1>
        @if (envioFormulario) {
        <form [formGroup]="subscribeForm" class="contenedor">
          <label for="subscribe-name">
            <input class="nombre" formControlName="nombre" placeholder="TU NOMBRE" type="text" id="subscribe-name">
          </label>
          <label for="subscribe-phone">
            <input formControlName="telefono" placeholder="TU FONO" type="text" id="subscribe-phone">
            <button type="submit" class="flecha" (click)="onSubmit()">
              <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_96_2434" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="63" height="63">
                  <path d="M63.063 1.62695H1.12701V63.5629H63.063V1.62695Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_96_2434)">
                  <path d="M45.0361 18.5459L45.0363 48.5572M45.0361 18.5459L15.0215 18.5563M45.0361 18.5459L15.0247 48.5572" stroke="white" stroke-width="6.1936"/>
                </g>
              </svg>
            </button>
            <button type="submit" class="boton" (click)="onSubmit()">SUBSCRIBE</button>
          </label>
        </form>}
        @else{
          <div class="reaccion">
            GRACIAS, ESTAMOS EN CONTACTO
          </div>
        }
      </main>
      } @placeholder {
        <div class="relleno"></div>
      }
    </header>
  `,
  styleUrls: ['./homeSuscribirse.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeSuscribirseComponent {
  envioFormulario = true;

  subscribeForm = new FormGroup({
    nombre: new FormControl(''),
    telefono: new FormControl('')
  });

  constructor(private suscripcionService: SuscripcionService) {}

  onSubmit() {
    this.envioFormulario = false;
    const cliente: Cliente = this.subscribeForm.value as Cliente;

    this.suscripcionService.agregarCliente(cliente).subscribe({
      next: (response) => {
        console.log('Cliente agregado:', response);
        this.envioFormulario = false;
      },
      error: (error) => {
        console.error('Error al agregar cliente:', error);
        this.envioFormulario = true;
      }
    });
  }
}