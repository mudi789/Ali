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
      date: 'El día 19',
      title: 'Donde empezó todo',
      description: 'Desde entonces, el 19 de cada mes dejó de ser un día cualquiera para convertirse en nuestro pequeño aniversario.',
    },
    {
      date: 'La primera vez',
      title: 'Ese momento que no se olvida',
      description: 'Entre risas, nervios y una que otra torpeza, supe que quería muchos más momentos como ese contigo.',
    },
    {
      date: 'Hoy',
      title: 'Seguimos escribiendo esta historia',
      description: 'Cada 19 celebramos un mes más, y cada día suma un capítulo más a esto que estamos construyendo juntos.',
    },
  ];
}
