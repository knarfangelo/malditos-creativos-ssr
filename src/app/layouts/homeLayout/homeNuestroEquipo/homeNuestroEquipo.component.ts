import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-nuestro-equipo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <img class="equipo" src="equipo-trabajo/equipo-trabajo.webp" alt="equipo de trabajo">
      <main>
        <h1><span class="punto"></span>Nuestro equipo de trabajo</h1>
        <h2>mas de 10 expertos del <br> mundo digital <br>
        Enfocados en tu <br> desarrollo</h2>
      </main>
    </header>

  `,
  styleUrl: './homeNuestroEquipo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeNuestroEquipoComponent { }
