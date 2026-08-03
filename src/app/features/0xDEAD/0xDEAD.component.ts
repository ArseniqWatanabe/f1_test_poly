import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

interface Pixel {
  id: number;
  row: number;
  col: number;
  animDelay: number;
}

@Component({
  selector: 'app-zero-dead',
  standalone: true,
  templateUrl: './0xDEAD.component.html',
  styleUrl: './0xDEAD.component.scss'
})
export class ZeroDeadComponent {
  private router = inject(Router);
  pixels: Pixel[] = [];

  constructor() {
    const rows = 30;
    const cols = 60;
    let id = 0;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        this.pixels.push({
          id: id++,
          row,
          col,
          animDelay: Math.random() * 5
        });
      }
    }
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}