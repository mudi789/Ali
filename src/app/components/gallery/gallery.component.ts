import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Photo {
  src: string | null;
  caption: string;
  gradient: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  photos: Photo[] = [
    { src: null, caption: 'Nuestra foto favorita', gradient: 'from-nova-700 via-nova-500 to-fuchsia-500' },
    { src: null, caption: 'Ese día tan especial', gradient: 'from-nova-900 via-nova-600 to-nova-300' },
    { src: null, caption: 'Riéndonos de algo tonto', gradient: 'from-fuchsia-600 via-nova-500 to-nova-800' },
    { src: null, caption: 'Un recuerdo que amo', gradient: 'from-nova-800 via-nova-400 to-white/40' },
    { src: null, caption: 'Nosotros, sin más', gradient: 'from-nova-600 via-fuchsia-500 to-nova-900' },
    { src: null, caption: 'Uno de mis favoritos', gradient: 'from-nova-950 via-nova-600 to-nova-200' },
  ];

  selected: Photo | null = null;

  open(photo: Photo): void {
    this.selected = photo;
  }

  close(): void {
    this.selected = null;
  }
}
