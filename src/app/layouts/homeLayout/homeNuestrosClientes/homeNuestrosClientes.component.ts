import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-nuestros-clientes',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  template: `
    <header>
      <main>
        <div class="info">
        <h1><span class="punto"></span>Nuestros clientes</h1>
        <p>Más de 10 años de <br> experiencia en <br> todo tipo de <br> industrias</p></div>
        <button routerLink="/#contactanos">Contáctanos</button>
      </main>
      <section class="marcas">
        <img src="/empresas/1-speed-demons.webp" alt="speed demos">
        <img src="/empresas/2-cemex.webp" alt="Cemex">
        <img src="/empresas/3-olva.webp" alt="Olva Courier">
        <img src="/empresas/4-saludpol.webp" alt="Saludpol">
        <img src="/empresas/5-reed.webp" alt="Reed">
        <img src="/empresas/6-edicom.webp" alt="Edicom">
        <img src="/empresas/7-edupan.webp" alt="Edupan">
        <img src="/empresas/8-valle-del-cauca.webp" alt="Valle del Cauca">
        <img src="/empresas/9-santiago.webp" alt="Santiago Consultores">
        <img src="/empresas/10-jrm.webp" alt="JRM">
        <img src="/empresas/11-alcaldia-panama.webp" alt="Alcaldía de Panamá">
        <img src="/empresas/12-claro.webp" alt="Telefonia Claro">
        <img src="/empresas/13-css-panama.webp" alt="CSS Panamá">
        <img src="/empresas/14-jmt.webp" alt="JMT Outdoors">
        <img src="/empresas/15-intercorp.webp" alt="Intercorp">
        <img src="/empresas/16-cesar-vallejo.webp" alt="Universidad César Vallejo">
      </section>
      <button class="button-2">Contáctanos</button>
    </header>
    <section class="cliente">
      <div class="neutroyt">
        <div class="formato">
        <span class="punto"></span>
        <h1>trabajamos con los mejores de la industria</h1></div>
        <h2>neutroooyt <br> 500K +</h2>
      </div>
      <div class="face">
        <img src="clientes/Murat-Soner.webp" alt="youtuber neutroooyt, Murat Soner">
      </div>
    </section>

  `,
  styleUrl: './homeNuestrosClientes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeNuestrosClientesComponent { }
