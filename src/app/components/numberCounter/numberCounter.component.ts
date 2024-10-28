import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-number-counter',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div class="counter">
      <p class="number">{{counter | async}}K +</p>
    </div>

  `,
  styleUrl: './numberCounter.component.css',
})
export class NumberCounterComponent implements OnInit, OnChanges, AfterViewInit {

  @Input("number") number!: number;
  @Input("duration") duration!: number;

  //counter: string = "0";
  counter = new BehaviorSubject<string>("0");

  constructor() {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes["number"] && changes["duration"]) {
      console.log("Changes happening");
      this.counterFunc();
    }
  }

  ngAfterViewInit() {}

  counterFunc() {
    let start = 0;
    let end = parseInt(String(this.number).substring(0, 3));

    if (start === end) {
      return;
    }

    // find duration per increment
    let totalMilSecDur = this.duration;
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      this.counter.next(String(start) + this.number.toString().substring(3));
      //this.counter = String(start) + this.number.toString().substring(3);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);
  }


}
