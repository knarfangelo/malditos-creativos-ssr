import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { HomeCuerpoComponent } from "./homeCuerpo/homeCuerpo.component";

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    HomeCuerpoComponent
],
  template: `
    <app-navegacion></app-navegacion>
    <app-home-cuerpo></app-home-cuerpo>
    
  `,
  styleUrl: './homeLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeLayoutComponent { }
