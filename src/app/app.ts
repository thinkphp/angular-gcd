import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, Footer],
  templateUrl: './app.htm',
  styleUrl: './app.css',
})
export class App {
  a: number | null = null;
  b: number | null = null;
  result: number | null = null;
  hasError = false;

  calculateGcd(): void {
    if (
      this.a === null ||
      this.b === null ||
      !Number.isSafeInteger(this.a) ||
      !Number.isSafeInteger(this.b)
    ) {
      this.result = null;
      this.hasError = true;
      return;
    }

    this.hasError = false;

    let x = Math.abs(this.a);
    let y = Math.abs(this.b);

    while (y !== 0) {
      const remainder = x % y;
      x = y;
      y = remainder;
    }

    this.result = x;
  }
}
