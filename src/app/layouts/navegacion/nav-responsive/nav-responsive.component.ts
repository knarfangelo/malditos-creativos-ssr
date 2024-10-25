import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nav-responsive',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <nav>
      <h1>MALDITOS CREATIVOS</h1>
      <img src="burguer.svg" alt="sitemap burguer">
    </nav>
  `,
  styleUrl: './nav-responsive.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavResponsiveComponent { }
