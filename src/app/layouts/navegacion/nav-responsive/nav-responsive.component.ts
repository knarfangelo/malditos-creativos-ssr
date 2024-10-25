import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-responsive',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="relleno"></div>
    <nav>
      <h1>MALDITOS CREATIVOS</h1>
      <img src="burguer.svg" alt="sitemap burguer"  (click)="toggleMenu()">
    </nav>
    <ul  [class.active]="isMenuOpen">
    <img src="logo-malditos-creativos.svg" alt="logo de malditos creativos">
        <li><a (click)="closeMenu()" href="#trabajo">NUESTRO TRABAJO</a></li>
        <li><a (click)="closeMenu()" href="#servicios">SERVICIOS</a></li>
        <li><a (click)="closeMenu()" href="#equipo">EQUIPO</a></li>
        <li><a (click)="closeMenu()" href="#contactanos">CONTACTANOS</a></li>
      </ul>
  `,
  styleUrl: './nav-responsive.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavResponsiveComponent {
    isMenuOpen = false;
    closeMenu(){
      this.isMenuOpen = false;
    }
    toggleMenu() {
      console.log('toggleMenu');
      this.isMenuOpen = !this.isMenuOpen;
    }
    
    @HostListener('document:click', ['$event'])
    closeMenuOnClickOutside(event: Event) {
      const target = event.target as HTMLElement;
      const clickedInside = target.closest('nav') || target.closest('ul');
      
      if (!clickedInside) {
        this.isMenuOpen = false;
      }
    }
  
  
}
