import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-estudio',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <h1>Conoce <br>nuestro <br> estudio.</h1>
    </header>
  `,
  styleUrl: './homeEstudio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeEstudioComponent { }
