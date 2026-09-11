import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-letter',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './letter.component.html',
})
export class LetterComponent {
  paragraphs: string[] = [
    'Ali,',
    'Quería hacerte algo distinto, algo que no se guarde en un cajón ni se pierda entre mensajes. Así que te construí este pequeño espacio, hecho a mano, pensando en ti.',
    'Aquí va a vivir nuestra historia: cada foto, cada fecha importante, cada cosa que quiero recordar contigo. Todavía le faltan cosas, pero como todo lo nuestro, se va a ir llenando con el tiempo.',
    'Gracias por ser mi persona favorita.',
  ];
}
