import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Milestone {
  date: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './story.component.html',
})
export class StoryComponent {
  milestones: Milestone[] = [
    {
      date: 'El día 1',
      title: 'Donde empezó todo',
      description: 'Cuéntame la fecha y el momento exacto y lo dejo grabado aquí para siempre.',
    },
    {
      date: 'La primera vez',
      title: 'Ese momento que no se olvida',
      description: 'Un recuerdo, una foto, una frase... este espacio es para lo que tú quieras contarme.',
    },
    {
      date: 'Hoy',
      title: 'Seguimos escribiendo esta historia',
      description: 'Cada día suma un capítulo más a esto que estamos construyendo juntos.',
    },
  ];
}
