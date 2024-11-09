import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IPlanPrecios, planPrecios } from './mantenimiento/planPrecios';

@Component({
  selector: 'app-plan-precios',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <header>
    <section class="buttons">
    <button class="d-web" (click)="showFullscreenCard(items[0])">DISEÑO WEB</button>
<button class="d-grafico" (click)="showFullscreenCard(items[1])">DISEÑO GRÁFICO</button>
<button class="p-digital" (click)="showFullscreenCard(items[2])">PAQUETE DIGITAL</button>
    </section>
    <main>
      <section *ngFor="let item of items" 
               class="card" [ngClass]="{'fullscreen': selectedPlan === item}">
        <div class="encabezado">
          <img class="fondo" src="planes/bc-planes-1.png" alt="">
          <img class="sticker" src="planes/sticker.png" alt="">
          <h2>{{ item.title }}</h2>
        </div>
        <div class="plan-container">
          <div *ngFor="let plan of item.plans" class="info">
            <h1>{{ plan.name }}<br>{{ plan.price }}</h1>
            <ol>
              <li *ngFor="let feature of plan.features">{{ feature }}</li>
            </ol>
          </div>
        </div>
      </section>
    </main>

    <!-- Fullscreen Overlay for Selected Card -->
    <div *ngIf="selectedPlan" class="fullscreen-overlay" (click)="closeFullscreenCard()">
      <section class="card fullscreen-card" (click)="$event.stopPropagation()">
        <div class="encabezado">
          <img class="fondo" src="planes/bc-planes-1.png" alt="">
          <img class="sticker" src="planes/sticker.png" alt="">
          <h2>{{ selectedPlan?.title }}</h2>
        </div>
        <div class="plan-container">
          <div *ngFor="let plan of selectedPlan?.plans" class="info">
            <h1>{{ plan.name }}<br>{{ plan.price }}</h1>
            <ol>
              <li *ngFor="let feature of plan.features">{{ feature }}</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  </header>
  `,
  styleUrls: ['./planPrecios.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanPreciosComponent { 
  items: IPlanPrecios[] = planPrecios;
  selectedPlan: IPlanPrecios | null = null;

  showFullscreenCard(plan: IPlanPrecios) {
    this.selectedPlan = plan;
  }

  closeFullscreenCard() {
    this.selectedPlan = null;
  }
}

