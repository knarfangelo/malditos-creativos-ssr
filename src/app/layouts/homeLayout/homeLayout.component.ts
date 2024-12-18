import { CommonModule, ViewportScroller } from '@angular/common';
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
import { HomeSuscribirseComponent } from "./homeSuscribirse/homeSuscribirse.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { PlanPreciosComponent } from "./planPrecios/planPrecios.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";

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
    HomeEquiposGrabacionComponent,
    HomeSuscribirseComponent,
    FooterComponent,
    PlanPreciosComponent,
    WhatsappComponent
],
  template: `
    <app-navegacion></app-navegacion>
    <app-home-cuerpo></app-home-cuerpo>
    <app-home-servicios id="servicios"></app-home-servicios>
    <app-home-video></app-home-video>
    <app-home-carrusel-guia></app-home-carrusel-guia>
    <app-home-nuestros-clientes id="trabajo"></app-home-nuestros-clientes>
    <app-home-nuestro-equipo id="equipo"></app-home-nuestro-equipo>
    <app-home-redes-sociales></app-home-redes-sociales>
    <app-home-estudio></app-home-estudio>
    <app-home-equipos-grabacion></app-home-equipos-grabacion>
    <app-plan-precios></app-plan-precios>
    <app-home-suscribirse id="contactanos"></app-home-suscribirse>
    <app-footer></app-footer>
    <app-whatsapp></app-whatsapp>
  `,
  styleUrl: './homeLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeLayoutComponent { }
