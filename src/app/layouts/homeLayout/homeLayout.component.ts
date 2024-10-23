import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { HomeCuerpoComponent } from "./homeCuerpo/homeCuerpo.component";
import { HomeServiciosComponent } from "./homeServicios/homeServicios.component";
import { HomeVideoComponent } from "./homeVideo/homeVideo.component";
import { HomeCarruselGuiaComponent } from "./homeCarruselGuia/homeCarruselGuia.component";

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    HomeCuerpoComponent,
    HomeServiciosComponent,
    HomeVideoComponent,
    HomeCarruselGuiaComponent
],
  template: `
    <app-navegacion></app-navegacion>
    <app-home-cuerpo></app-home-cuerpo>
    <app-home-servicios></app-home-servicios>
    <app-home-video></app-home-video>
    <app-home-carrusel-guia></app-home-carrusel-guia>
  `,
  styleUrl: './homeLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeLayoutComponent { }
