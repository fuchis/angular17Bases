import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hello World';
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
