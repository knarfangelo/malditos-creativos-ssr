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
  <button class="d-web" 
          (mouseenter)="setHoveredItem(items[0])" 
          (mouseleave)="clearHoveredItem()" 
          >
    DISEÑO WEB
  </button>
  <button class="d-grafico" 
          (mouseenter)="setHoveredItem(items[1])" 
          (mouseleave)="clearHoveredItem()" 
          >
    DISEÑO GRÁFICO
  </button>
  <button class="p-digital" 
          (mouseenter)="setHoveredItem(items[2])" 
          (mouseleave)="clearHoveredItem()" 
          >
    PAQUETE DIGITAL
  </button>
</section>

<main>
  <section *ngFor="let item of items" 
           class="card" 
           [ngClass]="{'zoomed': hoveredItem === item, 'fullscreen': selectedPlan === item}">
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
      <section class="cell-plans">
        <img src="planes/disenio-web.webp" alt="">
        <img src="planes/disenio-grafico.webp" alt="">
        <img src="planes/paquete-digital-3.webp" alt="">
      </section>
    </main>

    <!-- Fullscreen Overlay for Selected Card -->
    <div *ngIf="selectedPlan" class="fullscreen-overlay" (click)="closeFullscreenCard()">
    <section *ngFor="let item of items" 
           class="card" 
           [ngClass]="{'zoomed': hoveredItem === item, 'fullscreen': selectedPlan === item}">
        <div class="encabezado">
          <img class="fondo" src="planes/bc-planes-1.png" alt="">
          <img class="sticker" src="planes/sticker.png" alt="">
          <h2>{{ selectedPlan.title }}</h2>
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
  hoveredItem: IPlanPrecios | null = null;

  showFullscreenCard(plan: IPlanPrecios) {
    this.selectedPlan = plan;
  }

  closeFullscreenCard() {
    this.selectedPlan = null;
  }

  setHoveredItem(item: IPlanPrecios) {
    this.hoveredItem = item;
  }

  clearHoveredItem() {
    this.hoveredItem = null;
  }
}

  

