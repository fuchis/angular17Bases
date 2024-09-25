import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3> Counter {{ counter }}</h3>
    <button (click)="incrementCounterBy(+1)"> Increment </button>
    <button (click)="resetCounter()"> Reset </button>
    <button (click)="decrementCounterBy(-1)"> Decrement </button>
  `
})
export class CounterComponent {
  public counter: number = 10;

  public incrementCounterBy(incrementFactor: number): void {
    this.counter += incrementFactor;
  }

  public decrementCounterBy(decrementFactor: number): void {
    this.counter += decrementFactor;
  }

  public resetCounter(): void {
    this.counter = 10;
  }

}
