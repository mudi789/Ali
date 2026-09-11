import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit, OnDestroy {
  // TODO: reemplazar con la fecha real en que empezó todo
  private readonly startDate = new Date('2024-01-01T00:00:00');

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.tick();
    this.timer = setInterval(() => this.tick(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  private tick(): void {
    const diff = Math.max(0, Date.now() - this.startDate.getTime());
    const totalSeconds = Math.floor(diff / 1000);

    this.days = Math.floor(totalSeconds / 86400);
    this.hours = Math.floor((totalSeconds % 86400) / 3600);
    this.minutes = Math.floor((totalSeconds % 3600) / 60);
    this.seconds = totalSeconds % 60;
  }
}
