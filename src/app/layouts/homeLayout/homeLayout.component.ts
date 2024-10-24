import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { HomeCuerpoComponent } from "./homeCuerpo/homeCuerpo.component";
import { HomeServiciosComponent } from "./homeServicios/homeServicios.component";
import { HomeVideoComponent } from "./homeVideo/homeVideo.component";
import { HomeCarruselGuiaComponent } from "./homeCarruselGuia/homeCarruselGuia.component";
import { HomeNuestrosClientesComponent } from "./homeNuestrosClientes/homeNuestrosClientes.component";
import { HomeNuestroEquipoComponent } from "./homeNuestroEquipo/homeNuestroEquipo.component";
import { HomeRedesSocialesComponent } from "./homeRedesSociales/homeRedesSociales.component";
import { HomeEstudioComponent } from "./homeEstudio/homeEstudio.component";
import { HomeEquiposGrabacionComponent } from "./homeEquiposGrabacion/homeEquiposGrabacion.component";

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    HomeCuerpoComponent,
    HomeServiciosComponent,
    HomeVideoComponent,
    HomeCarruselGuiaComponent,
    HomeNuestrosClientesComponent,
    HomeNuestroEquipoComponent,
    HomeRedesSocialesComponent,
    HomeEstudioComponent,
    HomeEquiposGrabacionComponent
],
  template: `
    <app-navegacion></app-navegacion>
    <app-home-cuerpo></app-home-cuerpo>
    <app-home-servicios></app-home-servicios>
    <app-home-video></app-home-video>
    <app-home-carrusel-guia></app-home-carrusel-guia>
    <app-home-nuestros-clientes></app-home-nuestros-clientes>
    <app-home-nuestro-equipo></app-home-nuestro-equipo>
    <app-home-redes-sociales></app-home-redes-sociales>
    <app-home-estudio></app-home-estudio>
    <app-home-equipos-grabacion></app-home-equipos-grabacion>
  `,
  styleUrl: './homeLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeLayoutComponent { }
