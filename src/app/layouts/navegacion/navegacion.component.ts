import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <nav>
      <h1>MALDITOS CREATIVOS</h1>
      <ul>
        <li><a href="">NUESTRO TRABAJO</a></li>
        <li><a href="">SERVICIOS</a></li>
        <li><a href="">EQUIPO</a></li>
        <li><a href="">CONTACTANOS</a></li>
      </ul>
    </nav>
  `,
  styleUrl: './navegacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavegacionComponent { }
