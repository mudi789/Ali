import { Component, HostListener } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { StoryComponent } from './components/story/story.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CounterComponent } from './components/counter/counter.component';
import { LetterComponent } from './components/letter/letter.component';
import { FooterComponent } from './components/footer/footer.component';
import { ParticlesComponent } from './components/particles/particles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    StoryComponent,
    GalleryComponent,
    CounterComponent,
    LetterComponent,
    FooterComponent,
    ParticlesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cursorX = 0;
  cursorY = 0;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.cursorX = event.clientX;
    this.cursorY = event.clientY;
  }
}
