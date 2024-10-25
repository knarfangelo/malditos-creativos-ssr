import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavResponsiveComponent } from "./nav-responsive/nav-responsive.component";

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [
    CommonModule,
    NavResponsiveComponent
],
  template: `
    <nav>
      <h1>MALDITOS CREATIVOS</h1>
      <ul>
        <li><a href="#trabajo">NUESTRO TRABAJO</a></li>
        <li><a href="#servicios">SERVICIOS</a></li>
        <li><a href="#equipo">EQUIPO</a></li>
        <li><a href="#contactanos">CONTACTANOS</a></li>
      </ul>
    </nav>
    <app-nav-responsive></app-nav-responsive>
  `,
  styleUrl: './navegacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavegacionComponent { }
