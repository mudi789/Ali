import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle {
  left: string;
  size: string;
  delay: string;
  duration: string;
  opacity: number;
  symbol: string;
}

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <span
        *ngFor="let p of particles"
        class="absolute bottom-[-10%] select-none text-nova-300"
        [style.left]="p.left"
        [style.fontSize]="p.size"
        [style.opacity]="p.opacity"
        [style.animation]="'float-particle ' + p.duration + ' ease-in-out infinite'"
        [style.animationDelay]="p.delay"
      >{{ p.symbol }}</span>
    </div>
  `,
  styles: [`
    @keyframes float-particle {
      0% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-55vh) rotate(20deg); }
      100% { transform: translateY(-110vh) rotate(-15deg); }
    }
  `],
})
export class ParticlesComponent {
  particles: Particle[] = Array.from({ length: 22 }, (_, i) => {
    const symbols = ['✦', '✧', '♡', '•'];
    return {
      left: `${(i * 37) % 100}%`,
      size: `${8 + (i % 5) * 4}px`,
      delay: `${(i % 10) * 1.3}s`,
      duration: `${14 + (i % 6) * 3}s`,
      opacity: 0.15 + (i % 4) * 0.1,
      symbol: symbols[i % symbols.length],
    };
  });
}
